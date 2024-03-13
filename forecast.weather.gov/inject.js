let sibs = document.querySelector('a[href*=update]').parentNode.childNodes;
console.log('Update from ' + [... sibs].pop().textContent);
