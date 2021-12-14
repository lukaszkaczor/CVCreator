namespace CvCreator.Models
{
    public class Address
    {
        public int Id { get; set; }
        public string ZipCode { get; set; }
        public string City { get; set; }
        public string Street { get; set; }
        public string HouseNumber { get; set; }

        public CurriculumVitae CurriculumVitae { get; set; }
        public int? CurriculumVitaeId { get; set; }
    }
}