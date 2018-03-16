$(document).ready(function(){
	pullMenuCollapsed();

});

function pullMenuCollapsed(){	
	var tamanhoDispositivo = $(window).width();
	if (tamanhoDispositivo <=768) {
		$("#navbar-itens").removeClass('pull-right');
		$("#navbar-itens").addClass('pull-left');					
	}
	else {
		$("#navbar-itens").removeClass('pull-left');
		$("#navbar-itens").addClass('pull-right');	

	}
}