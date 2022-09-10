
namespace Master.Infra.Constant
{
    public static class SaleStage
    {
        public const int Open = 0;
        public const int Registered = 1;
        public const int Confirmed = 2;
        public const int PendingPayment = 3;
        public const int PendingProduction = 4;
        public const int PendingMail = 5;
        public const int DeliveredMail = 6;
        public const int Canceled = 99;

        public static string translate(long? opt)
        {
            switch ((int)opt)
            {
                case Open: return "Em aberto"; break;
                case Registered: return "Registrado"; break;
                case Confirmed: return "Confirmado"; break;
                case PendingPayment: return "Pendente Pagamento"; break;
                case PendingProduction: return "Produção"; break;
                case PendingMail: return "Pendente Correios"; break;
                case DeliveredMail: return "Entregue Correios"; break;
                case Canceled: return "Cancelado"; break;
            }

            return null;
        }
    }
}
