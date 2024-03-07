namespace MultiTenancy.Administration.Forms;
using Serenity;
using Serenity.ComponentModel;
using System;
using System.ComponentModel;

[FormScript("Administration.User")]
[BasedOnRow(typeof(UserRow))]

public class UserForm
{


    public string Username { get; set; }
    public string DisplayName { get; set; }
    [EmailEditor]
    public string Email { get; set; }
    [PasswordEditor]
    public string Password { get; set; }
    [PasswordEditor, OneWay]
    public string PasswordConfirm { get; set; }
    [OneWay]
    public string Source { get; set; }
    public int? TenantId { get; set; }



    [LookupEditor(typeof(RoleRow), Multiple = true)]
    public List<int> Roles { get; set; }
    public string UserImage { get; set; }
    [OneWay]
    public bool IsActive { get; set; }
}