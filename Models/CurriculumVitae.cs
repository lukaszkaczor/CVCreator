using System;
using System.Collections.Generic;

namespace CvCreator.Models
{
    public class CurriculumVitae
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ApplicationUserId { get; set; }
        public ApplicationUser ApplicationUser { get; set; }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }

        public string Email { get; set; }
        public string PhoneNumber { get; set; }

        public Address Address { get; set; }
        public int AddressId { get; set; }

        public ICollection<WorkExperience> WorkExperience { get; set; }
        public ICollection<SocialMedia> SocialMedia { get; set; }
    }
}