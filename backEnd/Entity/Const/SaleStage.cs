
namespace Master.Infra.Constant
{
    public static class SaleStage
    {
        public const int None = 0;
        public const int Registered = 1;
        public const int Paid = 2;
        public const int Production = 3;
        public const int Mail = 4;
        public const int Canceled = 5;

        public static string translate(long? opt)
        {
            switch ((int)opt)
            {
                case 0: return "None"; break;
                case 1: return "Registrado"; break;
                case 2: return "Pago"; break;
                case 3: return "Produção"; break;
                case 4: return "Correios"; break;
                case 5: return "Cancelado"; break;
            }

            return null;
        }
    }
}
