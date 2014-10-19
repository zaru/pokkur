Vue.directive('highlight', {
  bind: function () {
      // a comment node means this is a binding for
      // {{{ inline unescaped html }}}
      if (this.el.nodeType === 8) {
          // hold nodes
          this.nodes = []
      }
  },

  update: function (value) {
      // value = utils.guard(value)
      if (this.nodes) {
          this.swap(value)
      } else {
          this.el.innerHTML = value
      }

      $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
      });
  },

  swap: function (value) {
      var parent = this.el.parentNode,
          nodes  = this.nodes,
          i      = nodes.length
      // remove old nodes
      while (i--) {
          parent.removeChild(nodes[i])
      }
      // convert new value to a fragment
      var frag = utils.toFragment(value)
      // save a reference to these nodes so we can remove later
      this.nodes = slice.call(frag.childNodes)
      parent.insertBefore(frag, this.el)
  }
});
