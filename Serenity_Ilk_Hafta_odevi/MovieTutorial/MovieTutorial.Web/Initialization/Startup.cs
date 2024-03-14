using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.Server.Kestrel.Core;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Serialization;
using Serenity.Extensions.DependencyInjection;
using Serenity.Localization;
using Serenity.Navigation;
using System.Data.Common;
using System.IO;
using Hangfire;
using Hangfire.SqlServer;
using Microsoft.Owin;
using Owin;
using Serenity;
using Serenity.Data;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Web;

[assembly: OwinStartup(typeof(MovieTutorial.Startup))]


namespace MovieTutorial;

public partial class Startup
{


    private IEnumerable<IDisposable> GetHangfireServers()
    {
        GlobalConfiguration.Configuration
            .SetDataCompatibilityLevel(CompatibilityLevel.Version_170)
            .UseSimpleAssemblyNameTypeSerializer()
            .UseRecommendedSerializerSettings()
            // Reference the Default connection. If you want to add a new connection to
            // Hangfire's database then remember to add this connection in your Web.config
            .UseSqlServerStorage(SqlConnections.GetConnectionString("Default").ConnectionString,
                new SqlServerStorageOptions
                {
                    CommandBatchMaxTimeout = TimeSpan.FromMinutes(5),
                    SlidingInvisibilityTimeout = TimeSpan.FromMinutes(5),
                    QueuePollInterval = TimeSpan.Zero,
                    UseRecommendedIsolationLevel = true,
                    UsePageLocksOnDequeue = true,
                    DisableGlobalLocks = true
                });

        yield return new BackgroundJobServer();
    }

    public void Configuration(IAppBuilder app)
    {
        var options = new DashboardOptions
        {
            // You can add your own rules here, feedback welcome
            Authorization = new[] {
                new AuthorizationFilter() {
                    Users = "admin"
                }
            },
            AppPath = VirtualPathUtility.ToAbsolute("~")
        };

        app.UseHangfireAspNet(GetHangfireServers);
        app.UseHangfireDashboard("/jobs", options);

        // Setting up some example jobs
        // BackgroundJob.Enqueue<Common.Jobs.SimpleJob>(job => job.Run());
        // RecurringJob.AddOrUpdate<Common.Jobs.SimpleJob>(job => job.Run(), Cron.Hourly);
        // RecurringJob.AddOrUpdate<Common.Jobs.SimpleJob>(job => job.Run(), "0 * * * *");
    }


}