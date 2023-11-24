var usuarios = {

    usuario:

        [
            {
                id: '1',
                nome: 'Gustavo Henrique',
                email: 'gustavo@gmail.com',
                senha: '123',
                telefone: '(11) 98809-9363',
                foto_perfil: 'fotoAqui',
                endereco: [
                    {
                        cep: '06315-200',
                        rua: 'Rua José Sversut, 84',
                        complemento: 'apto 181, Bloco 3',
                        bairro: 'Jardim das Belezas',
                        estado: 'SP'
                    },

                    {
                        id: '2',
                        nome: 'Maria Silva',
                        email: 'maria@gmail.com',
                        senha: '123',
                        telefone: '(11) 98765-4321',
                        foto_perfil: 'fotoAqui2',
                        endereco: [
                            {
                                cep: '04567-890',
                                rua: 'Avenida das Flores, 123',
                                complemento: 'apto 45, Bloco 2',
                                bairro: 'Centro',
                                estado: 'RJ'
                            }
                        ]
                    },
                    {
                        id: '3',
                        nome: 'João Oliveira',
                        email: 'joao@gmail.com',
                        senha: '123',
                        telefone: '(11) 99999-9999',
                        foto_perfil: 'fotoAqui3',
                        endereco: [
                            {
                                cep: '01234-567',
                                rua: 'Travessa das Árvores, 56',
                                complemento: 'casa 78',
                                bairro: 'Vila Esperança',
                                estado: 'MG'
                            }
                        ]
                    },
                    {
                        id: '4',
                        nome: 'Ana Souza',
                        email: 'ana@gmail.com',
                        senha: '123',
                        telefone: '(11) 87654-3210',
                        foto_perfil: 'fotoAqui4',
                        endereco: [
                            {
                                cep: '09876-543',
                                rua: 'Rua das Estrelas, 789',
                                complemento: 'apto 22, Bloco 4',
                                bairro: 'Bela Vista',
                                estado: 'RS'
                            }
                        ]
                    },
                    {
                        id: '5',
                        nome: 'Pedro Santos',
                        email: 'pedro@gmail.com',
                        senha: '123',
                        telefone: '(11) 98765-4321',
                        foto_perfil: 'fotoAqui5',
                        endereco: [
                            {
                                cep: '03456-789',
                                rua: 'Avenida dos Sonhos, 456',
                                complemento: 'casa 33',
                                bairro: 'Parque das Flores',
                                estado: 'PR'
                            }
                        ]
                    },
                    {
                        id: '6',
                        nome: 'Carla Lima',
                        email: 'carla@gmail.com',
                        senha: '123',
                        telefone: '(11) 98765-4321',
                        foto_perfil: 'fotoAqui6',
                        endereco: [
                            {
                                cep: '06789-012',
                                rua: 'Alameda das Palmeiras, 789',
                                complemento: 'apto 55, Bloco 1',
                                bairro: 'Jardim Primavera',
                                estado: 'SC'
                            }
                        ]
                    }
                ]

            }
        ]
}

var categorias = {

    categoria:
        [
            {
                id: '1',
                nome_categoria: 'Geral',
                icon: ''
            },

            {
                id: '2',
                nome_categoria: 'Pizza',
                icon: ''
            },

            {
                id: '3',
                nome_categoria: 'Bebida',
                icon: ''
            },

            {
                id: '4',
                nome_categoria: 'Sobremesa',
                icon: ''
            },

            {
                id: '5',
                nome_categoria: 'Favoritos',
                icon: ''
            }

        ]

}

var produtos = {

    produto: [

        {
            id: '1',
            nome_produto: 'Pizza de Calabresa com Queijo',
            valor: 'R$16,00',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            categoria: categorias.categoria[1],
            avaliacao: 5,
            comentario:
                [

                    {
                        usuario: usuarios.usuario[0],
                        texto: 'Deliciosa!',
                        data: '12/09/2022'
                    },

                    {
                        usuario: usuarios.usuario[1],
                        texto: 'Pizza muito boa!',
                        data: '15/03/2022'
                    }

                ]


        },

        {
            id: '2',
            nome_produto: 'Pizza de Peperoni com Queijo',
            valor: 'R$19,00',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            categoria: categorias.categoria[1],
            avaliacao: 4,
            comentario:
                [

                    {
                        usuario: usuarios.usuario[2],
                        texto: 'A MELHOR PIZZA QUE COMI NA VIDA',
                        data: '17/10/2022'
                    },

                    {
                        usuario: usuarios.usuario[3],
                        texto: 'Tava muito boa, mas não tanto!',
                        data: '07/02/2022'
                    }

                ]
        },

        {
            id: '3',
            nome_produto: 'Coca-Cola',
            valor: 'R$14,99',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            categoria: categorias.categoria[2],
            avaliacao: 5,
            comentario:
                [

                    {
                        usuario: usuarios.usuario[2],
                        texto: 'Coca geladinha, hmmmm',
                        data: '17/10/2022'
                    }

                ]
        },

        {
            id: '4',
            nome_produto: 'Pudim de Leite',
            valor: 'R$12,89',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            categoria: categorias.categoria[3],
            avaliacao: 5,
            comentario:
                [

                    {
                        usuario: usuarios.usuario[2],
                        texto: 'Muito cremoso!',
                        data: '25/04/2022'
                    }

                ]
        }

    ]

}