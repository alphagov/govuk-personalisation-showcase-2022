<script>
    document.getElementById('select-all').onclick = function() {
        var checkboxes = document.getElementsByName('calculator-consent');
        for (var checkbox of checkboxes) {
            checkbox.checked = this.checked;
        }
    }

</script>