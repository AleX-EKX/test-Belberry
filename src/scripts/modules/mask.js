export function mask() {

    var elementPhone = document.querySelectorAll('input[name="phone"]');

    function addPhoneMask(input) {
        var maskOptions = {
            mask: '+7 (000) 000-0000',
        };
        IMask(input, maskOptions);
    }

    elementPhone.forEach(function (input) {
        input.addEventListener('input', function () {
            var value = input.value;
            addPhoneMask(input);
        });
    });
}