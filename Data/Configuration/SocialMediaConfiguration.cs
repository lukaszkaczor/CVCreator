using CvCreator.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CVCreator.Data.Configuration
{
    public class SocialMediaConfiguration : IEntityTypeConfiguration<SocialMedia>
    {
        public void Configure(EntityTypeBuilder<SocialMedia> builder)
        {
            builder.HasKey(social => social.Id);

            builder.Property(social => social.Name)
            .IsRequired()
            .HasMaxLength(64);


            builder.Property(social => social.Link)
            .IsRequired()
            .HasMaxLength(128);
        }
    }
}