namespace Program;

class Program
{
    static void Main()
    {        
        MyClass ilkobje = new();
        MyClass ikinciobje = new();
        ilkobje.Age = 24;
        ilkobje.Name = "Emre";
        ikinciobje.Age = 22;
        ikinciobje.Name = "Mücahit";
        System.Console.WriteLine("İlk Objenin bilgileri " + ilkobje.Age + " " + ilkobje.Name);
        System.Console.WriteLine("ikinci Objenin bilgileri " + ikinciobje.Age + " " + ikinciobje.Name);
        MyClass ThirdObject = new MyClass();
        System.Console.WriteLine("Üçüncü Objenin bilgileri " + ThirdObject.Age + " " + ThirdObject.Name);}
}



class MyClass
{
    private int age;
    private string name;

    public int Age{ get; set; } = 15;
    public string Name{ get; set; } = "default name";


    // public int Age
    // {
    //     get
    //     {
    //         return age;
    //     }
    //     set
    //     {
    //         age = value;
    //     }
    // }

    // public string Name
    // {
    //     get
    //     {
    //         return name;
    //     }
    //     set
    //     {
    //         name = value;
    //     }
    // }



}