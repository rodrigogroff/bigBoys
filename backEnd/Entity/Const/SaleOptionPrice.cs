
namespace Master.Infra.Constant
{
    public static class SaleOptionPrice
    {
        public const int A3 = 1;
        public const int A2 = 2;
        
        public static bool Check(int opt)
        {
            if (opt < 1 && opt > 2)
                return false;

            return true;
        }

        public static string translate(long? opt)
        {
            switch ((int)opt)
            {
                case 1: return "R$ 138,00"; break;
                case 2: return "R$ 180,00"; break;
            }

            return null;
        }
    }
}
