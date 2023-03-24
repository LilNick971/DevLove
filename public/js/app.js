/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
import'js/particles.js';

particlesJS.load('particles-js', 'json/particles.json',
    function() {
    console.log('callback - particles.js config loaded');
});