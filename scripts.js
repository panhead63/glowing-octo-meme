$(function () {
  //what radio value did they select?

  $("input[type=radio]").on("change", function () {
    // var $this = $(this);
    // if ($this.is(":checked")) alert("a");

    let radioChoice = $("input[type=radio]:checked").val(); // A or B

    if (radioChoice === "A") {
      $("#letterWordsSelect")
        .empty()
        .append(`<option value="costumes">Costumes</option>`)
        .append(`<option value="candy">Candy</option>`)
        .append(`<option value="spooky">Spooky</option>`);
    } else if (radioChoice === "B") {
      //`<option value="${optValue}">${optText}</option>`

      $("#letterWordsSelect")
        .empty()
        .append(`<option value="Presents">Presents</option>`)
        .append(`<option value="Decorations">Decorations</option>`)
        .append(`<option value="Family">Family</option>`);
    } else {
      $("#letterWordsSelect")
        .empty()
        .append(`<option value="costumes">pick a holiday...Halloween or Christmas</option>`);
    }
  });
});
