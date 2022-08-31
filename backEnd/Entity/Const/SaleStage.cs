
namespace Master.Infra.Constant
{
    public static class SaleStage
    {
        public const int Registered = 1;
        public const int Production = 2;
        public const int Mail = 3;
        
        public static bool Check(int opt)
        {
            if (opt < 1 && opt > 3)
                return false;

            return true;
        }

        public static string translate(long? opt)
        {
            switch ((int)opt)
            {
                case 1: return "Registered"; break;
                case 2: return "Production"; break;
                case 3: return "Mail"; break;                
            }

            return null;
        }
    }
}
