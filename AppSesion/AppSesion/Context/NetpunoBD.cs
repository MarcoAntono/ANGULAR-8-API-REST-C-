using AppSesion.DTO;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AppSesion.Context
{
    public class NetpunoBD : DbContext
    {

        public NetpunoBD(DbContextOptions<NetpunoBD> dbContextOptions) : base(dbContextOptions)
        {

        }

        public DbSet<Clientes> Clientes { get; set; }

    }
}
