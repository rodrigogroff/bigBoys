
namespace Master.Infra.Constant
{
    public static class SaleStage
    {
        public const int None = 0;
        public const int Registered = 1;
        public const int Confirmed = 2;
        public const int PendingPayment = 3;
        public const int Production = 4;
        public const int PendingMail = 5;
        public const int DeliveredMail = 6;
        public const int Canceled = 99;

        public static string translate(long? opt)
        {
            switch ((int)opt)
            {
                case 0: return "Não registrado"; break;
                case 1: return "Registrado"; break;
                case 2: return "Confirmado"; break;
                case 3: return "Pendente Pagamento"; break;
                case 4: return "Produção"; break;
                case 5: return "Pendente Correios"; break;
                case 6: return "Entregue Correios"; break;
                case 99: return "Cancelado"; break;
            }

            return null;
        }
    }
}
