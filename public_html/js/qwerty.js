function FillBlocks() {
    days_in_month[1] = current_year % 4 == 0 ? 29 : 28;
    $('.databox').text(months[current_month] + ' ' + current_year);
    var count = 0;
    var days_numbers = [];
    var bufMonth = current_month+1;
    var bufYear = current_year;
    if(bufMonth < 3) {
    	bufMonth += 12;
	bufYear--;
    }
    var first_date_in_month =1 + ((1 + 13 * IntegerDivision(bufmonth+1, 5) + IntegerDivision(5*(bufYear % 100) , 4) + IntegerDivision(bufYear , 400) - 2 * IntegerDivision(bufYear, 100) + 5) % 7);
    if (first_date_in_month != 1) {
        var days_in_prev_month;
        var first_day_in_week;
        days_in_prev_month = current_month == 0 ? days_in_month[11] : days_in_month[current_month - 1];
        first_day_in_week = days_in_prev_month - first_date_in_month + 2;
        for (var i = 0; i < first_date_in_month - 1; i++) {
            days_numbers.push(first_day_in_week + i);
            count++;
        }
    }
    for (var i = 1; i <= days_in_month[current_month]; i++) {
        days_numbers.push(i);
        count++;
    }
    var newmonth = 1;
    while (count < 42) {
        days_numbers.push(newmonth);
        newmonth++;
        count++;
    }
	
    var today = first_date_in_month + current_day - 1;
    $('ul li').each(function (index) {
            $(this).children('.insidetext').text(days_numbers[index]);
            if (index == today && current_date.getFullYear() == current_year && current_date.getMonth() == current_month) {
                $(this).addClass('currentday');
            }
	    
	    if (index  >= first_date_in_month - 1) {
	    	var elem = getEvent(index - first_date_in_month + 2, current_month, current_year);
	    	while( elem != '') {
	            $(this).addClass('daywithtask');
                    elem.event = elem.event.charAt(0).toUpperCase() + elem.event.substring(1);
                    $(this).children('.insidetext').after('<br/><span class="titletask">' + elem.event +
                    '</span><br><span class="tasktext">' + elem.names + '</span>');	    
    	    	    
		    elem = elem.next;
		}
    });
}
