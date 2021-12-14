using Microsoft.EntityFrameworkCore.Migrations;

namespace CvCreator.Data.Migrations
{
    public partial class AddCurriculumVitaeIdToAddressesTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CvList_Addresses_AddressId",
                table: "CvList");

            migrationBuilder.DropForeignKey(
                name: "FK_CvList_AspNetUsers_ApplicationUserId",
                table: "CvList");

            migrationBuilder.DropIndex(
                name: "IX_CvList_AddressId",
                table: "CvList");

            migrationBuilder.AlterColumn<string>(
                name: "ApplicationUserId",
                table: "CvList",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(450)",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "CurriculumVitaeId",
                table: "Addresses",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Addresses_CurriculumVitaeId",
                table: "Addresses",
                column: "CurriculumVitaeId",
                unique: true,
                filter: "[CurriculumVitaeId] IS NOT NULL");

            migrationBuilder.AddForeignKey(
                name: "FK_Addresses_CvList_CurriculumVitaeId",
                table: "Addresses",
                column: "CurriculumVitaeId",
                principalTable: "CvList",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_CvList_AspNetUsers_ApplicationUserId",
                table: "CvList",
                column: "ApplicationUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Addresses_CvList_CurriculumVitaeId",
                table: "Addresses");

            migrationBuilder.DropForeignKey(
                name: "FK_CvList_AspNetUsers_ApplicationUserId",
                table: "CvList");

            migrationBuilder.DropIndex(
                name: "IX_Addresses_CurriculumVitaeId",
                table: "Addresses");

            migrationBuilder.DropColumn(
                name: "CurriculumVitaeId",
                table: "Addresses");

            migrationBuilder.AlterColumn<string>(
                name: "ApplicationUserId",
                table: "CvList",
                type: "nvarchar(450)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.CreateIndex(
                name: "IX_CvList_AddressId",
                table: "CvList",
                column: "AddressId");

            migrationBuilder.AddForeignKey(
                name: "FK_CvList_Addresses_AddressId",
                table: "CvList",
                column: "AddressId",
                principalTable: "Addresses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_CvList_AspNetUsers_ApplicationUserId",
                table: "CvList",
                column: "ApplicationUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
