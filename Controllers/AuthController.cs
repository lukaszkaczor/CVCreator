using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Reflection.Metadata.Ecma335;
using System.Security.Claims;
using System.Text;
using System.Text.RegularExpressions;
using CVCreator.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace CVCreator.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        [HttpPost, Route("login")]
        public IActionResult Login([FromBody] LogisModel user)
        {
            if (user == null)
                return BadRequest();

            if (user.Username == "asd" && user.Password == "asd")
            {
                var secretkey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("securitykeysdjfshdfjhsdfdfjhsdjf"));
                var signingCreditentials = new SigningCredentials(secretkey, SecurityAlgorithms.HmacSha256);

                var claims = new List<Claim>(){
                  new Claim(ClaimTypes.Name, user.Username),
                  new Claim(ClaimTypes.Role, "Admin")
                };

                var tokenOptions = new JwtSecurityToken(
                    issuer: "https://https://localhost:5001/",
                    audience: "https://https://localhost:5001/",
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(60),
                    signingCredentials: signingCreditentials
                );

                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);

                return Ok(new { Token = tokenString });
            }

            return Unauthorized();
        }
    }
}