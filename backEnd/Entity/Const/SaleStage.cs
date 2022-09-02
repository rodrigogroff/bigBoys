
namespace Master.Infra.Constant
{
    public static class SaleStage
    {
        public const int None = 0;
        public const int Registered = 1;
        public const int Confirmed = 2;
        public const int Paid = 3;
        public const int Production = 4;
        public const int Mail = 5;
        public const int Canceled = 6;

        public static string translate(long? opt)
        {
            switch ((int)opt)
            {
                case 0: return "None"; break;
                case 1: return "Registrado"; break;
                case 2: return "Confirmado"; break;
                case 3: return "Pago"; break;
                case 4: return "Produção"; break;
                case 5: return "Correios"; break;
                case 6: return "Cancelado"; break;
            }

            return null;
        }
    }
}
