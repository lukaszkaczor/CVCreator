using CvCreator.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CVCreator.Data.Configuration
{
    public class CvListConfiguration : IEntityTypeConfiguration<CurriculumVitae>
    {
        public void Configure(EntityTypeBuilder<CurriculumVitae> builder)
        {
            builder.HasKey(cv => cv.Id);

            builder.Property(cv => cv.ApplicationUserId).IsRequired();

            builder.Property(cv => cv.FirstName).HasMaxLength(32);

            builder.Property(cv => cv.LastName).HasMaxLength(32);

            builder.Property(cv => cv.DateOfBirth).IsRequired(false).HasMaxLength(10);

            builder.Property(cv => cv.Email).HasMaxLength(64);

            builder.Property(cv => cv.PhoneNumber).HasMaxLength(16).IsRequired(false);
        }
    }
}