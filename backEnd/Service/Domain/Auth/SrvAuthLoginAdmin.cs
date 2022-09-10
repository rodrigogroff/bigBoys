using Master.Entity.Database;
using Master.Entity.Domain;
using Master.Repository;

namespace Master.Service.Domain.Auth
{
    public class SrvAuthLoginAdmin : SrvBaseService
    {
        public IAdminRepo adminRepo = new AdminRepo();

        public bool Login(string conn, string cpf, string password, out DtoUserAdmin usr)
        {
            usr = new DtoUserAdmin();

            if (string.IsNullOrEmpty(conn))
                return ReportError("Connection information failed");

            if (string.IsNullOrEmpty(cpf))
                return ReportError("CPF information failed");

            if (string.IsNullOrEmpty(password))
                return ReportError("Password information failed");

            var db_user = new Entity.Database.Admin();

            if (!adminRepo.GetUserByCPF(conn, cpf, out db_user))
                return ReportError("Error 0xE1");

            if (db_user.stPassword != password)
                return ReportError("Error 0xE3");

            usr.id = db_user.id.ToString();
            usr.name = "Administrador";

            return true;
        }
    }
}
