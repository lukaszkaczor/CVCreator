using System.Threading;
using System.Collections.Generic;
using System.Threading.Tasks;
using CvCreator.Data;
using CvCreator.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CVCreator.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CvController : ControllerBase
    {
        private ApplicationDbContext _context;

        public CvController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<CurriculumVitae>> Get() => await _context.CvList.ToListAsync();

        [HttpGet("{id}")]
        public async Task<ActionResult<CurriculumVitae>> Get(int id)
        {
            var cv = await _context.CvList.FindAsync(id);

            if (cv is null) return NotFound();
            Thread.Sleep(2000);
            return cv;
        }

        [HttpPost]
        public async Task<ActionResult<Address>> Post(CurriculumVitae todoItem)
        {
            _context.CvList.Add(todoItem);
            await _context.SaveChangesAsync();

            Thread.Sleep(500);


            return CreatedAtAction(nameof(Get), new { id = todoItem.Id }, todoItem);
        }

    }
}