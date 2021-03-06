import Ember from 'ember';
const { Controller } = Ember;

const moarNumbers = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
  'twenty',
  'twenty one',
  'twenty two',
  'twenty three',
  'twenty four',
  'twenty five',
  'twenty six',
  'twenty seven',
  'twenty eight',
  'twenty nine',
  'thirty',
  'thirty one',
  'thirty two',
  'thirty three',
  'thirty four',
  'thirty five',
  'thirty six',
  'thirty seven',
  'thirty eight',
  'thirty nine',
  'fourty',
  'fourty one',
  'fourty two',
  'fourty three',
  'fourty four',
  'fourty five',
  'fourty six',
  'fourty seven',
  'fourty eight',
  'fourty nine',
  'fifty',
  'fifty one',
  'fifty two',
  'fifty three',
  'fifty four',
  'fifty five',
  'fifty six',
  'fifty seven',
  'fifty eight',
  'fifty nine',
  'sixty',
  'sixty one',
  'sixty two',
  'sixty three',
  'sixty four',
  'sixty five',
  'sixty six',
  'sixty seven',
  'sixty eight',
  'sixty nine',
  'seventy',
  'seventy one',
  'seventy two',
  'seventy three',
  'seventy four',
  'seventy five',
  'seventy six',
  'seventy seven',
  'seventy eight',
  'seventy nine',
  'eighty',
  'eighty one',
  'eighty two',
  'eighty three',
  'eighty four',
  'eighty five',
  'eighty six',
  'eighty seven',
  'eighty eight',
  'eighty nine',
  'ninety',
  'ninety one',
  'ninety two',
  'ninety three',
  'ninety four',
  'ninety five',
  'ninety six',
  'ninety seven',
  'ninety eight',
  'ninety nine',
  'one hundred',
  'one hundred and one',
  'one hundred and two',
  'one hundred and three',
  'one hundred and four',
  'one hundred and five',
  'one hundred and six',
  'one hundred and seven',
  'one hundred and eight',
  'one hundred and nine',
  'one hundred and ten',
  'one hundred and eleven',
  'one hundred and twelve',
  'one hundred and thirteen',
  'one hundred and fourteen',
  'one hundred and fifteen',
  'one hundred and sixteen',
  'one hundred and seventeen',
  'one hundred and eighteen',
  'one hundred and nineteen',
  'one hundred and twenty',
  'one hundred and twenty one',
  'one hundred and twenty two',
  'one hundred and twenty three',
  'one hundred and twenty four',
  'one hundred and twenty five',
  'one hundred and twenty six',
  'one hundred and twenty seven',
  'one hundred and twenty eight',
  'one hundred and twenty nine',
  'one hundred and thirty',
  'one hundred and thirty one',
  'one hundred and thirty two',
  'one hundred and thirty three',
  'one hundred and thirty four',
  'one hundred and thirty five',
  'one hundred and thirty six',
  'one hundred and thirty seven',
  'one hundred and thirty eight',
  'one hundred and thirty nine',
  'one hundred and fourty',
  'one hundred and fourty one',
  'one hundred and fourty two',
  'one hundred and fourty three',
  'one hundred and fourty four',
  'one hundred and fourty five',
  'one hundred and fourty six',
  'one hundred and fourty seven',
  'one hundred and fourty eight',
  'one hundred and fourty nine',
  'one hundred and fifty',
  'one hundred and fifty one',
  'one hundred and fifty two',
  'one hundred and fifty three',
  'one hundred and fifty four',
  'one hundred and fifty five',
  'one hundred and fifty six',
  'one hundred and fifty seven',
  'one hundred and fifty eight',
  'one hundred and fifty nine',
  'one hundred and sixty',
  'one hundred and sixty one',
  'one hundred and sixty two',
  'one hundred and sixty three',
  'one hundred and sixty four',
  'one hundred and sixty five',
  'one hundred and sixty six',
  'one hundred and sixty seven',
  'one hundred and sixty eight',
  'one hundred and sixty nine',
  'one hundred and seventy',
  'one hundred and seventy one',
  'one hundred and seventy two',
  'one hundred and seventy three',
  'one hundred and seventy four',
  'one hundred and seventy five',
  'one hundred and seventy six',
  'one hundred and seventy seven',
  'one hundred and seventy eight',
  'one hundred and seventy nine',
  'one hundred and eighty',
  'one hundred and eighty one',
  'one hundred and eighty two',
  'one hundred and eighty three',
  'one hundred and eighty four',
  'one hundred and eighty five',
  'one hundred and eighty six',
  'one hundred and eighty seven',
  'one hundred and eighty eight',
  'one hundred and eighty nine',
  'one hundred and ninety',
  'one hundred and ninety one',
  'one hundred and ninety two',
  'one hundred and ninety three',
  'one hundred and ninety four',
  'one hundred and ninety five',
  'one hundred and ninety six',
  'one hundred and ninety seven',
  'one hundred and ninety eight',
  'one hundred and ninety nine',
  'two hundred',
  'two hundred and one',
  'two hundred and two',
  'two hundred and three',
  'two hundred and four',
  'two hundred and five',
  'two hundred and six',
  'two hundred and seven',
  'two hundred and eight',
  'two hundred and nine',
  'two hundred and ten',
  'two hundred and eleven',
  'two hundred and twelve',
  'two hundred and thirteen',
  'two hundred and fourteen',
  'two hundred and fifteen',
  'two hundred and sixteen',
  'two hundred and seventeen',
  'two hundred and eighteen',
  'two hundred and nineteen',
  'two hundred and twenty',
  'two hundred and twenty one',
  'two hundred and twenty two',
  'two hundred and twenty three',
  'two hundred and twenty four',
  'two hundred and twenty five',
  'two hundred and twenty six',
  'two hundred and twenty seven',
  'two hundred and twenty eight',
  'two hundred and twenty nine',
  'two hundred and thirty',
  'two hundred and thirty one',
  'two hundred and thirty two',
  'two hundred and thirty three',
  'two hundred and thirty four',
  'two hundred and thirty five',
  'two hundred and thirty six',
  'two hundred and thirty seven',
  'two hundred and thirty eight',
  'two hundred and thirty nine',
  'two hundred and fourty',
  'two hundred and fourty one',
  'two hundred and fourty two',
  'two hundred and fourty three',
  'two hundred and fourty four',
  'two hundred and fourty five',
  'two hundred and fourty six',
  'two hundred and fourty seven',
  'two hundred and fourty eight',
  'two hundred and fourty nine',
  'two hundred and fifty',
  'two hundred and fifty one',
  'two hundred and fifty two',
  'two hundred and fifty three',
  'two hundred and fifty four',
  'two hundred and fifty five',
  'two hundred and fifty six',
  'two hundred and fifty seven',
  'two hundred and fifty eight',
  'two hundred and fifty nine',
  'two hundred and sixty',
  'two hundred and sixty one',
  'two hundred and sixty two',
  'two hundred and sixty three',
  'two hundred and sixty four',
  'two hundred and sixty five',
  'two hundred and sixty six',
  'two hundred and sixty seven',
  'two hundred and sixty eight',
  'two hundred and sixty nine',
  'two hundred and seventy',
  'two hundred and seventy one',
  'two hundred and seventy two',
  'two hundred and seventy three',
  'two hundred and seventy four',
  'two hundred and seventy five',
  'two hundred and seventy six',
  'two hundred and seventy seven',
  'two hundred and seventy eight',
  'two hundred and seventy nine',
  'two hundred and eighty',
  'two hundred and eighty one',
  'two hundred and eighty two',
  'two hundred and eighty three',
  'two hundred and eighty four',
  'two hundred and eighty five',
  'two hundred and eighty six',
  'two hundred and eighty seven',
  'two hundred and eighty eight',
  'two hundred and eighty nine',
  'two hundred and ninety',
  'two hundred and ninety one',
  'two hundred and ninety two',
  'two hundred and ninety three',
  'two hundred and ninety four',
  'two hundred and ninety five',
  'two hundred and ninety six',
  'two hundred and ninety seven',
  'two hundred and ninety eight',
  'two hundred and ninety nine',
  'three hundred',
  'three hundred and one',
  'three hundred and two',
  'three hundred and three',
  'three hundred and four',
  'three hundred and five',
  'three hundred and six',
  'three hundred and seven',
  'three hundred and eight',
  'three hundred and nine',
  'three hundred and ten',
  'three hundred and eleven',
  'three hundred and twelve',
  'three hundred and thirteen',
  'three hundred and fourteen',
  'three hundred and fifteen',
  'three hundred and sixteen',
  'three hundred and seventeen',
  'three hundred and eighteen',
  'three hundred and nineteen',
  'three hundred and twenty',
  'three hundred and twenty one',
  'three hundred and twenty two',
  'three hundred and twenty three',
  'three hundred and twenty four',
  'three hundred and twenty five',
  'three hundred and twenty six',
  'three hundred and twenty seven',
  'three hundred and twenty eight',
  'three hundred and twenty nine',
  'three hundred and thirty',
  'three hundred and thirty one',
  'three hundred and thirty two',
  'three hundred and thirty three',
  'three hundred and thirty four',
  'three hundred and thirty five',
  'three hundred and thirty six',
  'three hundred and thirty seven',
  'three hundred and thirty eight',
  'three hundred and thirty nine',
  'three hundred and fourty',
  'three hundred and fourty one',
  'three hundred and fourty two',
  'three hundred and fourty three',
  'three hundred and fourty four',
  'three hundred and fourty five',
  'three hundred and fourty six',
  'three hundred and fourty seven',
  'three hundred and fourty eight',
  'three hundred and fourty nine',
  'three hundred and fifty',
  'three hundred and fifty one',
  'three hundred and fifty two',
  'three hundred and fifty three',
  'three hundred and fifty four',
  'three hundred and fifty five',
  'three hundred and fifty six',
  'three hundred and fifty seven',
  'three hundred and fifty eight',
  'three hundred and fifty nine',
  'three hundred and sixty',
  'three hundred and sixty one',
  'three hundred and sixty two',
  'three hundred and sixty three',
  'three hundred and sixty four',
  'three hundred and sixty five',
  'three hundred and sixty six',
  'three hundred and sixty seven',
  'three hundred and sixty eight',
  'three hundred and sixty nine',
  'three hundred and seventy',
  'three hundred and seventy one',
  'three hundred and seventy two',
  'three hundred and seventy three',
  'three hundred and seventy four',
  'three hundred and seventy five',
  'three hundred and seventy six',
  'three hundred and seventy seven',
  'three hundred and seventy eight',
  'three hundred and seventy nine',
  'three hundred and eighty',
  'three hundred and eighty one',
  'three hundred and eighty two',
  'three hundred and eighty three',
  'three hundred and eighty four',
  'three hundred and eighty five',
  'three hundred and eighty six',
  'three hundred and eighty seven',
  'three hundred and eighty eight',
  'three hundred and eighty nine',
  'three hundred and ninety',
  'three hundred and ninety one',
  'three hundred and ninety two',
  'three hundred and ninety three',
  'three hundred and ninety four',
  'three hundred and ninety five',
  'three hundred and ninety six',
  'three hundred and ninety seven',
  'three hundred and ninety eight',
  'three hundred and ninety nine',
  'four hundred',
  'four hundred and one',
  'four hundred and two',
  'four hundred and three',
  'four hundred and four',
  'four hundred and five',
  'four hundred and six',
  'four hundred and seven',
  'four hundred and eight',
  'four hundred and nine',
  'four hundred and ten',
  'four hundred and eleven',
  'four hundred and twelve',
  'four hundred and thirteen',
  'four hundred and fourteen',
  'four hundred and fifteen',
  'four hundred and sixteen',
  'four hundred and seventeen',
  'four hundred and eighteen',
  'four hundred and nineteen',
  'four hundred and twenty',
  'four hundred and twenty one',
  'four hundred and twenty two',
  'four hundred and twenty three',
  'four hundred and twenty four',
  'four hundred and twenty five',
  'four hundred and twenty six',
  'four hundred and twenty seven',
  'four hundred and twenty eight',
  'four hundred and twenty nine',
  'four hundred and thirty',
  'four hundred and thirty one',
  'four hundred and thirty two',
  'four hundred and thirty three',
  'four hundred and thirty four',
  'four hundred and thirty five',
  'four hundred and thirty six',
  'four hundred and thirty seven',
  'four hundred and thirty eight',
  'four hundred and thirty nine',
  'four hundred and fourty',
  'four hundred and fourty one',
  'four hundred and fourty two',
  'four hundred and fourty three',
  'four hundred and fourty four',
  'four hundred and fourty five',
  'four hundred and fourty six',
  'four hundred and fourty seven',
  'four hundred and fourty eight',
  'four hundred and fourty nine',
  'four hundred and fifty',
  'four hundred and fifty one',
  'four hundred and fifty two',
  'four hundred and fifty three',
  'four hundred and fifty four',
  'four hundred and fifty five',
  'four hundred and fifty six',
  'four hundred and fifty seven',
  'four hundred and fifty eight',
  'four hundred and fifty nine',
  'four hundred and sixty',
  'four hundred and sixty one',
  'four hundred and sixty two',
  'four hundred and sixty three',
  'four hundred and sixty four',
  'four hundred and sixty five',
  'four hundred and sixty six',
  'four hundred and sixty seven',
  'four hundred and sixty eight',
  'four hundred and sixty nine',
  'four hundred and seventy',
  'four hundred and seventy one',
  'four hundred and seventy two',
  'four hundred and seventy three',
  'four hundred and seventy four',
  'four hundred and seventy five',
  'four hundred and seventy six',
  'four hundred and seventy seven',
  'four hundred and seventy eight',
  'four hundred and seventy nine',
  'four hundred and eighty',
  'four hundred and eighty one',
  'four hundred and eighty two',
  'four hundred and eighty three',
  'four hundred and eighty four',
  'four hundred and eighty five',
  'four hundred and eighty six',
  'four hundred and eighty seven',
  'four hundred and eighty eight',
  'four hundred and eighty nine',
  'four hundred and ninety',
  'four hundred and ninety one',
  'four hundred and ninety two',
  'four hundred and ninety three',
  'four hundred and ninety four',
  'four hundred and ninety five',
  'four hundred and ninety six',
  'four hundred and ninety seven',
  'four hundred and ninety eight',
  'four hundred and ninety nine',
  'five hundred',
  'five hundred and one',
  'five hundred and two',
  'five hundred and three',
  'five hundred and four',
  'five hundred and five',
  'five hundred and six',
  'five hundred and seven',
  'five hundred and eight',
  'five hundred and nine',
  'five hundred and ten',
  'five hundred and eleven',
  'five hundred and twelve',
  'five hundred and thirteen',
  'five hundred and fourteen',
  'five hundred and fifteen',
  'five hundred and sixteen',
  'five hundred and seventeen',
  'five hundred and eighteen',
  'five hundred and nineteen',
  'five hundred and twenty',
  'five hundred and twenty one',
  'five hundred and twenty two',
  'five hundred and twenty three',
  'five hundred and twenty four',
  'five hundred and twenty five',
  'five hundred and twenty six',
  'five hundred and twenty seven',
  'five hundred and twenty eight',
  'five hundred and twenty nine',
  'five hundred and thirty',
  'five hundred and thirty one',
  'five hundred and thirty two',
  'five hundred and thirty three',
  'five hundred and thirty four',
  'five hundred and thirty five',
  'five hundred and thirty six',
  'five hundred and thirty seven',
  'five hundred and thirty eight',
  'five hundred and thirty nine',
  'five hundred and fourty',
  'five hundred and fourty one',
  'five hundred and fourty two',
  'five hundred and fourty three',
  'five hundred and fourty four',
  'five hundred and fourty five',
  'five hundred and fourty six',
  'five hundred and fourty seven',
  'five hundred and fourty eight',
  'five hundred and fourty nine',
  'five hundred and fifty',
  'five hundred and fifty one',
  'five hundred and fifty two',
  'five hundred and fifty three',
  'five hundred and fifty four',
  'five hundred and fifty five',
  'five hundred and fifty six',
  'five hundred and fifty seven',
  'five hundred and fifty eight',
  'five hundred and fifty nine',
  'five hundred and sixty',
  'five hundred and sixty one',
  'five hundred and sixty two',
  'five hundred and sixty three',
  'five hundred and sixty four',
  'five hundred and sixty five',
  'five hundred and sixty six',
  'five hundred and sixty seven',
  'five hundred and sixty eight',
  'five hundred and sixty nine',
  'five hundred and seventy',
  'five hundred and seventy one',
  'five hundred and seventy two',
  'five hundred and seventy three',
  'five hundred and seventy four',
  'five hundred and seventy five',
  'five hundred and seventy six',
  'five hundred and seventy seven',
  'five hundred and seventy eight',
  'five hundred and seventy nine',
  'five hundred and eighty',
  'five hundred and eighty one',
  'five hundred and eighty two',
  'five hundred and eighty three',
  'five hundred and eighty four',
  'five hundred and eighty five',
  'five hundred and eighty six',
  'five hundred and eighty seven',
  'five hundred and eighty eight',
  'five hundred and eighty nine',
  'five hundred and ninety',
  'five hundred and ninety one',
  'five hundred and ninety two',
  'five hundred and ninety three',
  'five hundred and ninety four',
  'five hundred and ninety five',
  'five hundred and ninety six',
  'five hundred and ninety seven',
  'five hundred and ninety eight',
  'five hundred and ninety nine'
];

export default Controller.extend({
  options: moarNumbers,
  customScrollTo(highlighted, select) {
    let index = select.results.indexOf(highlighted);
    let optionsElement = document.getElementById(`ember-power-select-options-${select.uniqueId}`);
    let { height } = optionsElement.getBoundingClientRect();
    let currentScrollY = optionsElement.scrollTop;
    let topOfOption = index * 28;
    let bottomOfOption = topOfOption + 28;
    if (bottomOfOption > currentScrollY + height) {
      optionsElement.scrollTop = bottomOfOption - height;
    } else if (topOfOption < currentScrollY) {
      optionsElement.scrollTop = topOfOption;
    }
  }
})


