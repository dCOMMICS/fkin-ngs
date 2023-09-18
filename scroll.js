scrollTrigger: {
    trigger: ".selector", // selector or element
    start: "top center",  // [trigger] [scroller] positions
    end: "20px 80%", // [trigger] [scroller] positions
    // or relative amount: "+=500"
    scrub: true, // or time (in seconds) to catch up
    pin: true, // or selector or element to pin
    markers: true, // only during development!
    toggleActions: "play pause resume reset",
    // other actions: complete reverse none
    toggleClass: "active",
    fastScrollEnd: true, // or velocity number
    containerAnimation: tween, // linear animation
    id: "my-id",
    anticipatePin: 1, // may help avoid jump
    snap: {
      snapTo: 1 / 10, // progress increment
      // or "labels" or function or Array
      duration: 0.5,
      directional: true,
      ease: "power3",
      onComplete: callback,
      // other callbacks: onStart, onInterrupt
    },
    pinReparent: true, // moves to documentElement during pin
    pinSpacing: false,
    pinType: "transform" // or "fixed"
    pinnedContainer: ".selector",
    preventOverlaps: true, // or arbitrary string
    once: true,
    endTrigger: ".selector", // selector or element
    horizontal: true, // switches mode
    invalidateOnRefresh: true, // clears start values on refresh
    refreshPriority: 1, // influence refresh order
    onEnter: callback
    // other callbacks: 
    // onLeave, onEnterBack, onLeaveBack, onUpdate,
    // onToggle, onRefresh, onRefreshInit, onScrubComplete
  }

  // fix error on this code