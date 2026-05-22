function AjouterTache() { 
    const tache = document.getElementById("task");
    const tasklist = document.getElementById("tasklist");
    const tacheTerminee = document.getElementById("listviewTaskDone");
    if (tache.value) {
        const li = document.createElement("li");
        li.innerHTML = tache.value;

        
        $(li).on('swiperight', function() {
            // $(li).toggleClass('done');
             $(li).hide('slow', function() {
                $(li).appendTo(tasklist);
                $(li).show('slow');
                $(tacheTerminee).listview('refresh');
            });
        });
        
        
        $(li).on('swipeleft', function() {
            $(li).hide('slow', function() {
                // $(li).remove();
                $(li).hide('slow', function() {
                $(li).appendTo(tacheTerminee);
                $(li).show('slow');
                $(tacheTerminee).listview('refresh');
            });
            });
        });
        tasklist.append(li);
        $("#tabs").tabs("option", "active", 0);
        $("a[href='#en-cours']").click();
        $(tasklist).listview('refresh');
        tache.select();
    }
}

function SupprimerTache() {
    const tasklist = document.getElementById("tasklist");
    const tache = document.getElementById("task");
    const tacheTerminee = document.getElementById("listviewTaskDone");
    tasklist.innerHTML = "";
    tacheTerminee.innerHTML = "";
    tache.value = "";
    tache.focus();
    $("a[href='#en-cours']").click();
}
