// function getDayOfWeek(date, format) {
//     const formattedDate = new Date(date);
//     const options = {};

//     switch (format) {
//         case 'datetime':
//             options.year = 'numeric';
//             options.month = 'long';
//             options.day = 'numeric';
//             options.hour = '2-digit';
//             options.minute = '2-digit';
//             break;
//         case 'time':
//             options.hour = '2-digit';
//             options.minute = '2-digit';
//             break;
//         case 'date':
//             options.year = 'numeric';
//             options.month = 'long';
//             options.day = 'numeric';
//             break;
//     }

//     return new Intl.DateTimeFormat('fr-FR', options).format(formattedDate);
// }

// function dailyTraitementForNext5days(data) {
//     const dailyAverages = {};

//     data.forEach((item) => {
//         const date = item.date;
//         const dayOfWeek = getDayOfWeek(item.date, 'weekday');

//         if (!dailyAverages[date]) {
//             dailyAverages[date] = {
//                 tempsMin: [],
//                 tempsMax: [],
//                 icons: {},
//                 dayOfWeek,
//             };
//         }

//         dailyAverages[date].tempsMin.push(item.tempMin);
//         dailyAverages[date].tempsMax.push(item.tempMax);

//         const icon = item.icon;
//         if (!dailyAverages[date].icons[icon]) {
//             dailyAverages[date].icons[icon] = 0;
//         }
//         dailyAverages[date].icons[icon]++;
//     });

//     return Object.keys(dailyAverages).map((date) => {
//         const dayData = dailyAverages[date];
//         const mostFrequentIcon = Object.keys(dayData.icons).sort((a, b) => dayData.icons[b] - dayData.icons[a])[0];

//         return {
//             date,
//             dayOfWeek: dayData.dayOfWeek,
//             avgMinTemp: average(dayData.tempsMin),
//             avgMaxTemp: average(dayData.tempsMax),
//             icon: mostFrequentIcon,
//         };
//     });
// }

// function average(arr) {
//     return arr.reduce((a, b) => a + b, 0) / arr.length;
// }

// export { getDayOfWeek, dailyTraitementForNext5days };
