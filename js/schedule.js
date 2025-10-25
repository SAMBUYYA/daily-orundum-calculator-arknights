let schedule = [];

/* RULES */

/* type     : "daily",              (For getting item can always everyday) */
/* type     : "daily-on-date-month",(For getting item in 1 day every month) */
/* type     : "daily-input",        (For getting item can always everyday with input) */
/* type     : "daily-remaining",        (For getting item can always everyday with input but limited day with number of input) */

/* type     : "weekly", (For getting item can always everyweek)*/

/* type     : "monthly", (For getting item can always everymonth)*/

/* item     : "orundum" or "originite_prime" or "headhunting_permit"  or "ten_roll_headhunting_permit" */
/* amount   : 0 (number) */

/* id       : unique_id_and_must_be_diferent_each_other */
/* amount   : Just a Title */

schedule.push({

    type    : "daily", active: true,

    item    : "orundum",
    amount  : 100,

    id      : "daily_missions_100_orundum",
    name    : "Daily Missions<br>(+100 Orundum)",
    
});

schedule.push({

    type    : "daily-input", active: false,

    item    : "orundum",
    amount  : 0,

    id      : "daily_trading_post",
    name    : "Daily Trading Post<br>(+? Orundum)",
    
});


schedule.push({

    type    : "daily-on-date-month", active: true,
    type_daily_on_date_month: 17,

    item    : "headhunting_permit",
    amount  : 1,

    id      : "daily_supply_1_headhunting_permit",
    name    : "Daily Supply Login<br>(+1 Headhunting Permit)",
    
});

schedule.push({

    type    : "daily-remaining", active: false,

    item    : "orundum",
    amount  : 200,

    id      : "monthly_card",
    name    : "Monthly Card (? Daily Remainings)<br>(+200 Orundum)",
    
});

schedule.push({

    type    : "weekly", active: true,

    item    : "orundum",
    amount  : 500,

    id      : "weekly_missions_500_orundum",
    name    : "Weekly Mission<br>(+500 Orundum)",
    
});

schedule.push({

    type    : "weekly", active: false,

    item    : "orundum",
    amount  : 1800,

    id      : "weekly_annihilation_operation_1800_orundum",
    name    : "Weekly Reward Annihilation Operation<br>(+1800 Orundum)",
    
});

schedule.push({

    type    : "monthly", active: false,

    item    : "headhunting_permit",
    amount  : 2,

    id      : "monthly_commendations_store_phase_1_2_headhunting_permit",
    name    : "Monthly Commendations Store Phase 1<br>(+2 Headhunting Permit)",
    
});

schedule.push({

    type    : "monthly", active: false,

    item    : "orundum",
    amount  : 600,

    id      : "monthly_commendations_store_phase_1_600_orundum",
    name    : "Monthly Commendations Store Phase 1<br>(+600 Orundum)",
    
});

schedule.push({

    type    : "monthly", active: false,

    item    : "headhunting_permit",
    amount  : 2,

    id      : "monthly_commendations_store_phase_2_2_headhunting_permit",
    name    : "Monthly Commendations Store Phase 2<br>(+2 Headhunting Permit)",
    
});