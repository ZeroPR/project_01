<template>
    <v-flex xs12>
        <v-card light>
            <v-toolbar color="primary">
                <v-toolbar-title class="white--text">Registrar</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                    <v-btn 
                    slot="activator" 
                    color="secondary">Clear</v-btn>
                    <span>Limpiar el Formulario</span>
                </v-tooltip>
            </v-toolbar>
            <v-form>
                <v-container grid-list-sm>
                    <v-layout row wrap>
                        <v-flex xs6>
                            <v-text-field
                            label="ID Factura"
                            box>
                            </v-text-field>
                        </v-flex>
                        <v-flex xs6>
                            <v-text-field
                            label="ID Orden"
                            box>
                            </v-text-field>
                        </v-flex>
                        <v-flex xs12>
                             <v-textarea
                            label="Descripcion"
                            box>
                            </v-textarea>
                        </v-flex>

                        <!-- Fechas -->
                        <v-flex xs12>
                            Fechas
                        </v-flex>

                        <!-- Montos -->
                        <v-flex xs6 sm4 md4>
                            <v-text-field
                            label="Monto"
                            box
                            append-icon="fas fa-dollar-sign">
                            </v-text-field>
                        </v-flex>
                        <v-flex xs6 sm4 md4>
                            <v-text-field
                            label="IVU"
                            box
                            append-icon="fas fa-dollar-sign">
                            </v-text-field>
                        </v-flex>
                        <v-flex xs6 sm4 md4>
                            <v-text-field
                            label="Monto Total"
                            box
                            append-icon="fas fa-dollar-sign">
                            </v-text-field>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-form>
        </v-card>
    </v-flex>
</template>
