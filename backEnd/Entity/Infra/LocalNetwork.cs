﻿namespace Master.Entity.Infra
{
    public class LocalNetwork
    {
        public const string Secret = "ciOiJs2IUzI1NiIsInR5cCI6IeyJ1bmlxdxxxWVfbmFtZSI6IjEiLCJuYmYiOjE1NTc5Mjk4ODcsImV4cCI6MTU1fhdsjhfeuyrejhdfj73333";
        public string pgConnection { get; set; }
        public int codeExpirationMinutes { get; set; }
        public string cacheDirectory { get; set; }

        public bool cache { get; set; }
    }
}
