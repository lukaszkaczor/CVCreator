using System.Collections.Generic;

namespace CvCreator.Models
{
    public class CurriculumVitae
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ApplicationUserId { get; set; }
        public ApplicationUser ApplicationUser { get; set; }

        public ICollection<WorkExperience> WorkExperience { get; set; }
    }
}