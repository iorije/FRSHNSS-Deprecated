function validateForm() {
    var errorCount = 0;
    
    var name = $('#name').val();
    if (isBlank(name)) {
        errorCount++;
        showError($('#nameError'));
    } else {
        hideError($('#nameError'));
    }

    var firstName = $('#firstName').val();
    if (isBlank(firstName)) {
        errorCount++;
        showError($('#firstNameError'));
    } else {
        hideError($('#firstNameError'));
    }

    var email = $('#email').val();
    if (validateEmail(email)) {
        errorCount++;
        showError($('#emailError'));
    } else {
        hideError($('#emailError'));
    }

    var size1 = $("#size1 + div ul li.selected");
    if (validateDropdown(size1)) {
        errorCount++;
        showError($('#sizeError1'));
    } else {
        hideError($('#sizeError1'));
    }
    
    var count1 = $('#count1').val();
    if (!validateNumber(count1)) {
        errorCount++;
        showError($('#countError1'));
    } else {
        hideError($('#countError1'));
    }

    if (errorCount == 0) {
        return true;
    }
    return false;
}

function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}

function hideError(dit) {
    if (!dit.hasClass('hidden-field')) {
        dit.addClass('hidden-field');
    }
}

function showError(dit) {
    dit.removeClass('hidden-field');
}

function validateEmail(email) {
    var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return (!re.test(email));
}

function validateDropdown(dit) {
    if (dit.hasClass('disabled')) {
        return true;
    }
    return false;
}

function validateNumber(dit) {
    return !isNaN(parseFloat(dit)) && isFinite(dit);
};