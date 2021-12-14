using CvCreator.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CvCreator.Data.Configuration
{
    public class AddressConfiguration : IEntityTypeConfiguration<Address>
    {
        public void Configure(EntityTypeBuilder<Address> builder)
        {
            builder.HasKey(address => address.Id);

            builder.HasOne(d => d.CurriculumVitae)
            .WithOne(d => d.Address)
            .HasForeignKey<Address>(d => d.CurriculumVitaeId);

            builder.Property(address => address.ZipCode)
            .IsRequired()
            .HasMaxLength(10);

            builder.Property(address => address.City)
            .IsRequired()
            .HasMaxLength(128);

            builder.Property(address => address.Street)
            .HasMaxLength(128);

            builder.Property(address => address.HouseNumber)
            .HasMaxLength(8);
        }
    }
}