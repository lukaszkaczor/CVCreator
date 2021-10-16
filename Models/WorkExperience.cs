using System;

namespace CvCreator.Models
{
    public class WorkExperience
    {
        public int Id { get; set; }
        public string JobTitle { get; set; }
        public string Company { get; set; }
        public string Localizaion { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public bool StillWorking { get; set; }
        public string Description { get; set; }

        public CurriculumVitae CurriculumVitae { get; set; }
        public int CurriculumVitaeId { get; set; }
    }
}