import { Component } from '@angular/core';

@Component({
    selector: 'app-ejercicios',
    templateUrl: './ejercicios.component.html',
    styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent {
    public inventario: any = [{ id: 1, nombre: "pantalon", precio: 250 },
    { id: 2, nombre: "chamarra", precio: 500 }];

    public formulario: any = { id: null, nombre: null, precio: null };

    public seleccionar(articulos: any): void {
        this.formulario.id = articulos.id;
        this.formulario.nombre = articulos.nombre;
        this.formulario.precio = articulos.precio;
    }
    public eliminar(id: number): void {
        for (let index = 0; index < this.inventario.length; index++) {
            if (this.inventario[index].id == id) {
                this.inventario.splice(index, 1);
                alert("Eliminado con exito");
                break;
            }
        }
    }

    public agregar(): void {
        let datoNuevo = { id: this.formulario.id, nombre: this.formulario.nombre, precio: this.formulario.precio };
        for (let index = 0; index < this.inventario.length; index++) {
            if (this.inventario[index].id == this.formulario.id) {
                alert("ID duplicado");
                this.limpiarCampo();
                break;
            }
        }
        if (this.formulario.id == null) {
            alert("Rellena todos los campos");
            this.limpiarCampo();
        }
        if (this.formulario.nombre != null) {
            this.inventario.push(datoNuevo);
            alert("Agregado con exito!");
            this.limpiarCampo();
        }

    }
    public editar(id: number): void {
        for (let index = 0; index < this.inventario.length; index++) {
            if (((this.formulario.id)-1) == this.inventario[index].id) {
                alert(this.inventario[index].id);
                this.inventario[index + 1].nombre = this.formulario.nombre;
                this.inventario[index + 1].precio = this.formulario.precio;
                alert("ID igual");
                this.limpiarCampo();
                break;
            } else {
                alert(this.inventario[index].id);
                alert("Ingresa el ID correcto: " + ((this.inventario[index].id) + 1));
                this.limpiarCampo();
                break;
            }
        }
        // for (let index = 0; index < this.inventario.length; index++) {
        //     if (this.inventario[index].id == id) {
        //         this.inventario[index].id = this.formulario.id;
        //         this.inventario[index].nombre = this.formulario.nombre;
        //         this.inventario[index].precio = this.formulario.precio;
        //         alert("Se ha modificado con exito!!");
        //         this.limpiarCampo();
        //         break;
        //     }
        // }
    }
    public limpiarCampo() {
        console.log("Limpiado")
        this.formulario.id = null;
        this.formulario.nombre = null;
        this.formulario.precio = null;
    }
}

