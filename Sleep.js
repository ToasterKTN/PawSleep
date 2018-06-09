var Sleep = function() {
  this.evaluate = function(context) {
    var dynamicValue = "done";
    var waitUntil = new Date().getTime() + this.sleeptime*1000;
    while(new Date().getTime() < waitUntil) true;
    return dynamicValue;
  }
}
Sleep.inputs = [
    InputField("sleeptime", "SleepTime(seconds)", "Number",{persisted: true, defaultValue: 1, minValue: 1, maxValue: 60}),
];
// set the Extension Identifier (must be same as the directory name)
Sleep.identifier = "ch.ktn.PawExtensions.Sleep";
// give a display name to your Dynamic Value
Sleep.title = "Sleep for an amount of Seconds";
// link to the Dynamic Value documentation
Sleep.help = "https://google.com/";
// call to register function is required
registerDynamicValueClass(Sleep)