let clientes = []
function agregarCliente(nombre, id){
    clientes.push({nombre: nombre, id: id});
    console.log("Se ha registrado correctamente")
}
function buscarCliente(id){
    return clientes.find(function(cliente){
        return cliente.id === id;
    });
}
function ingresar(){
    let id = prompt("Ingresar numero de id");
    let cliente = buscarCliente(id);
    if (cliente){
        console.log("Usted ha ingresado al gimnasio");
    }else{
        console.log("Usted no está registrado");
    }
}
agregarCliente("Lautaro", "21897");
agregarCliente("Sebastian", "47963");
agregarCliente("Esteban", "98765");

ingresar();




