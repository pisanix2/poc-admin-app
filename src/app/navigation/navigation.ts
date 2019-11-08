import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'estoque',
        title    : 'Estoque',
        type     : 'group',
        children : [
            {
                id       : 'cadastro_produto',
                title    : 'Cadastro de produtos',
                type     : 'item',
                icon     : 'email',
                url      : '/product'
            },
            {
                id       : 'inventario',
                title    : 'Inventário',
                type     : 'item',
                icon     : 'email',
                url      : '/inventory'
            },
            {
                id       : 'transferencia_estoque',
                title    : 'Transferência entre estoques',
                type     : 'item',
                icon     : 'email',
                url      : '/stock-transfer'
            }
        ]
    },
    {
        id       : 'comercial',
        title    : 'Comercial',
        type     : 'group',
        children : [
            {
                id       : 'pdv',
                title    : 'PDV',
                type     : 'item',
                icon     : 'email',
                url      : '/pdv'
            }
        ]
    }
];
