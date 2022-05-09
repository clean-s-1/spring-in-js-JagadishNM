module.exports = class StatsAlerter {

    constructor(maxThreshold, alerters) {
        this.maxThreshold = maxThreshold;
        this.alerters = alerters;

    }

    checkAndAlert(thresholds) {
        let isMaxThreshold = thresholds.some(e => e > this.maxThreshold);
        this.alerters[0].emailSent = isMaxThreshold;
        this.alerters[1].ledGlows = isMaxThreshold;
    };

    // checkAndAlert = function (thresholds) {
    //     let isMaxThreshold = thresholds.some(e => e > this.maxThreshold);
    //     this.alerters[0].emailSent = true;
    //     this.alerters[1].ledGlows = isMaxThreshold;
    // };
}