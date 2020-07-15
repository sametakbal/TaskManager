using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class WorkRepository : IWorkRepository
    {
        private readonly DataContext _context;
        public WorkRepository(DataContext context)
        {
            _context = context;
        }
        public  async Task<Work> GetWorksByIdAsync(int id)
        {
            return await _context.Works.FindAsync(id);
        }

        public async Task<IReadOnlyList<Work>> GetWorksAsync()
        {
            DateTime today = DateTime.Today; 
            return await _context.Works.Where(w => w.GoalTime >=  today && w.GoalTime <= today.AddDays(7)).ToListAsync();
        }
         public async Task<IReadOnlyList<Work>> GetMonthWorksAsync()
        {
            DateTime today = DateTime.Today; 
            return await _context.Works.Where(w => w.GoalTime >=  today && w.GoalTime <= today.AddMonths(1)).ToListAsync();
        }
         public async Task<IReadOnlyList<Work>> GetYearWorksAsync()
        {
            DateTime today = DateTime.Today; 
            return await _context.Works.Where(w => w.GoalTime >=  today && w.GoalTime <= today.AddYears(1)).ToListAsync();
        }

        public async Task<bool> AddWorkAsync(Work work)
        {
            await _context.Works.AddAsync(work);
            int res = await _context.SaveChangesAsync();
            return res != 0 ? true : false;  
        }

         public async Task<bool> DeleteWorkAsync(int id)
        {
            var work = await GetWorksByIdAsync(id);
            _context.Works.Remove(work);
            int res = await _context.SaveChangesAsync();
            return res != 0 ? true : false;  
        }

        public async Task<bool> UpdateWorkAsync(Work work)
        {
            _context.Works.Update(work);
            int res = await _context.SaveChangesAsync();
            return res != 0 ? true : false;  
        }
    }
}