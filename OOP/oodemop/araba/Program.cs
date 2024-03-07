using System;
namespace araba
{



    public class Araba
    {

        public Araba(double y , int s){

            yakit=y;
            hiz=s;

        }
        private double yakit;
        private int hiz;

        public void set_yakit(double y)
        {
            if (y >= 60)
            {
                y = 60;

            }
            if (y < 0)
            {
                y = 0;
            }
            yakit = y;
        }

        public void set_hiz(int s)
        {
            if (s > 260)
            {
                s = 260;

            }
            if (s < 0)
            {
                s = 0;
            }
            hiz = s;
        }

        public void Yakit_Yukle(double y)
        {

            y = yakit + y;
            set_yakit(y);
        }
        public double get_yakit()
        {
            return yakit;
        }
        public int get_Hiz()
        {
            return hiz;
        }

        public void sur(){
            if(hiz<50){
                yakit-=3;
            }else if (hiz<90){
                yakit -=1;
            }else if (hiz<140){
                yakit -=2;
            }
            else {
                yakit -=4;
            }
            set_yakit(yakit);
        }
        public string goster(){
            return "Yakıt miktarı "+yakit.ToString()+"hız:"+hiz.ToString() ;
        }
    }

    class Program
    {


        static void Main()
        {
            Araba nesne1 = new Araba(35,20);
            Console.WriteLine(nesne1.goster());
            nesne1.sur();
            Console.WriteLine(nesne1.goster());
            nesne1.set_hiz(80);
            nesne1.sur();
            Console.WriteLine(nesne1.goster());
               nesne1.set_hiz(120);
            nesne1.sur();
            Console.WriteLine(nesne1.goster());
               nesne1.set_hiz(220);
            nesne1.sur();
            Console.WriteLine(nesne1.goster());
        }
    }
}