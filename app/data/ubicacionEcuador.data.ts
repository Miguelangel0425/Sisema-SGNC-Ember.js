// Fuente: Datos-Geograficos-Ecuador (vfabianfarias), catálogo de división político-administrativa
// 25 provincias, 224 cantones, 1399 parroquias.
// Estructura en cascada: Provincia -> Cantón -> Parroquia.

export interface IParroquiaEc {
  id: number;
  nombre: string;
}

export interface ICantonEc {
  id: number;
  nombre: string;
  parroquias: IParroquiaEc[];
}

export interface IProvinciaEc {
  id: number;
  nombre: string;
  cantones: ICantonEc[];
}

export const UBICACION_ECUADOR: IProvinciaEc[] = [
  {
    "id": 1,
    "nombre": "Azuay",
    "cantones": [
      {
        "id": 15,
        "nombre": "Camilo Ponce Enríquez",
        "parroquias": [
          {
            "id": 102,
            "nombre": "Camilo Ponce Enríquez"
          },
          {
            "id": 103,
            "nombre": "El Carmen de Pijilí"
          }
        ]
      },
      {
        "id": 11,
        "nombre": "Chordeleg",
        "parroquias": [
          {
            "id": 89,
            "nombre": "Chordeleg"
          },
          {
            "id": 91,
            "nombre": "La Unión"
          },
          {
            "id": 92,
            "nombre": "Luis Galarza Orellana (Cab.En Delegsol)"
          },
          {
            "id": 90,
            "nombre": "Principal"
          },
          {
            "id": 93,
            "nombre": "San Martín de Puzhio"
          }
        ]
      },
      {
        "id": 1,
        "nombre": "Cuenca",
        "parroquias": [
          {
            "id": 17,
            "nombre": "Baños"
          },
          {
            "id": 1,
            "nombre": "Bellavista"
          },
          {
            "id": 2,
            "nombre": "Cañaribamba"
          },
          {
            "id": 19,
            "nombre": "Chaucha"
          },
          {
            "id": 20,
            "nombre": "Checa (Jidcay)"
          },
          {
            "id": 21,
            "nombre": "Chiquintad"
          },
          {
            "id": 16,
            "nombre": "Cuenca"
          },
          {
            "id": 18,
            "nombre": "Cumbe"
          },
          {
            "id": 3,
            "nombre": "El Batán"
          },
          {
            "id": 4,
            "nombre": "El Sagrario"
          },
          {
            "id": 5,
            "nombre": "El Vecino"
          },
          {
            "id": 6,
            "nombre": "Gil Ramírez Dávalos"
          },
          {
            "id": 15,
            "nombre": "Hermano Miguel"
          },
          {
            "id": 7,
            "nombre": "Huaynacápac"
          },
          {
            "id": 22,
            "nombre": "Llacao"
          },
          {
            "id": 8,
            "nombre": "Machángara"
          },
          {
            "id": 23,
            "nombre": "Molleturo"
          },
          {
            "id": 9,
            "nombre": "Monay"
          },
          {
            "id": 24,
            "nombre": "Nulti"
          },
          {
            "id": 25,
            "nombre": "Octavio Cordero Palacios (Santa Rosa)"
          },
          {
            "id": 26,
            "nombre": "Paccha"
          },
          {
            "id": 27,
            "nombre": "Quingeo"
          },
          {
            "id": 28,
            "nombre": "Ricaurte"
          },
          {
            "id": 10,
            "nombre": "San Blas"
          },
          {
            "id": 29,
            "nombre": "San Joaquín"
          },
          {
            "id": 11,
            "nombre": "San Sebastián"
          },
          {
            "id": 30,
            "nombre": "Santa Ana"
          },
          {
            "id": 31,
            "nombre": "Sayausí"
          },
          {
            "id": 32,
            "nombre": "Sidcay"
          },
          {
            "id": 33,
            "nombre": "Sinincay"
          },
          {
            "id": 12,
            "nombre": "Sucre"
          },
          {
            "id": 34,
            "nombre": "Tarqui"
          },
          {
            "id": 13,
            "nombre": "Totoracocha"
          },
          {
            "id": 35,
            "nombre": "Turi"
          },
          {
            "id": 36,
            "nombre": "Valle"
          },
          {
            "id": 37,
            "nombre": "Victoria del Portete (Irquis)"
          },
          {
            "id": 14,
            "nombre": "Yanuncay"
          }
        ]
      },
      {
        "id": 12,
        "nombre": "El Pan",
        "parroquias": [
          {
            "id": 95,
            "nombre": "Amaluza"
          },
          {
            "id": 94,
            "nombre": "El Pan"
          },
          {
            "id": 96,
            "nombre": "Palmas"
          },
          {
            "id": 97,
            "nombre": "San Vicente"
          }
        ]
      },
      {
        "id": 2,
        "nombre": "Girón",
        "parroquias": [
          {
            "id": 39,
            "nombre": "Asunción"
          },
          {
            "id": 38,
            "nombre": "Girón"
          },
          {
            "id": 40,
            "nombre": "San Gerardo"
          }
        ]
      },
      {
        "id": 14,
        "nombre": "Guachapala",
        "parroquias": [
          {
            "id": 101,
            "nombre": "Guachapala"
          }
        ]
      },
      {
        "id": 3,
        "nombre": "Gualaceo",
        "parroquias": [
          {
            "id": 42,
            "nombre": "Chordeleg"
          },
          {
            "id": 43,
            "nombre": "Daniel Córdova Toral (El Oriente)"
          },
          {
            "id": 41,
            "nombre": "Gualaceo"
          },
          {
            "id": 44,
            "nombre": "Jadán"
          },
          {
            "id": 50,
            "nombre": "Luis Cordero Vega"
          },
          {
            "id": 45,
            "nombre": "Mariano Moreno"
          },
          {
            "id": 46,
            "nombre": "Principal"
          },
          {
            "id": 47,
            "nombre": "Remigio Crespo Toral (Gúlag)"
          },
          {
            "id": 48,
            "nombre": "San Juan"
          },
          {
            "id": 51,
            "nombre": "Simón Bolívar (Cab. En Gañanzol)"
          },
          {
            "id": 49,
            "nombre": "Zhidmad"
          }
        ]
      },
      {
        "id": 4,
        "nombre": "Nabón",
        "parroquias": [
          {
            "id": 53,
            "nombre": "Cochapata"
          },
          {
            "id": 54,
            "nombre": "El Progreso (Cab.En Zhota)"
          },
          {
            "id": 55,
            "nombre": "Las Nieves (Chaya)"
          },
          {
            "id": 52,
            "nombre": "Nabón"
          },
          {
            "id": 56,
            "nombre": "Oña"
          }
        ]
      },
      {
        "id": 10,
        "nombre": "Oña",
        "parroquias": [
          {
            "id": 87,
            "nombre": "San Felipe de Oña Cabecera Cantonal"
          },
          {
            "id": 88,
            "nombre": "Susudel"
          }
        ]
      },
      {
        "id": 5,
        "nombre": "Paute",
        "parroquias": [
          {
            "id": 58,
            "nombre": "Amaluza"
          },
          {
            "id": 59,
            "nombre": "Bulán (José Víctor Izquierdo)"
          },
          {
            "id": 60,
            "nombre": "Chicán (Guillermo Ortega)"
          },
          {
            "id": 69,
            "nombre": "Dug Dug"
          },
          {
            "id": 61,
            "nombre": "El Cabo"
          },
          {
            "id": 62,
            "nombre": "Guachapala"
          },
          {
            "id": 63,
            "nombre": "Guarainag"
          },
          {
            "id": 64,
            "nombre": "Palmas"
          },
          {
            "id": 65,
            "nombre": "Pan"
          },
          {
            "id": 57,
            "nombre": "Paute"
          },
          {
            "id": 66,
            "nombre": "San Cristóbal (Carlos Ordóñez Lazo)"
          },
          {
            "id": 67,
            "nombre": "Sevilla de Oro"
          },
          {
            "id": 68,
            "nombre": "Tomebamba"
          }
        ]
      },
      {
        "id": 6,
        "nombre": "Pucara",
        "parroquias": [
          {
            "id": 71,
            "nombre": "Camilo Ponce Enríquez (Cab. En Río 7 de Mollepongo)"
          },
          {
            "id": 70,
            "nombre": "Pucará"
          },
          {
            "id": 72,
            "nombre": "San Rafael de Sharug"
          }
        ]
      },
      {
        "id": 7,
        "nombre": "San Fernando",
        "parroquias": [
          {
            "id": 74,
            "nombre": "Chumblín"
          },
          {
            "id": 73,
            "nombre": "San Fernando"
          }
        ]
      },
      {
        "id": 8,
        "nombre": "Santa Isabel",
        "parroquias": [
          {
            "id": 76,
            "nombre": "Abdón Calderón (La Unión)"
          },
          {
            "id": 77,
            "nombre": "El Carmen de Pijilí"
          },
          {
            "id": 79,
            "nombre": "San Salvador de Cañaribamba"
          },
          {
            "id": 75,
            "nombre": "Santa Isabel (Chaguarurco)"
          },
          {
            "id": 78,
            "nombre": "Zhaglli (Shaglli)"
          }
        ]
      },
      {
        "id": 13,
        "nombre": "Sevilla de Oro",
        "parroquias": [
          {
            "id": 99,
            "nombre": "Amaluza"
          },
          {
            "id": 100,
            "nombre": "Palmas"
          },
          {
            "id": 98,
            "nombre": "Sevilla de Oro"
          }
        ]
      },
      {
        "id": 9,
        "nombre": "Sigsig",
        "parroquias": [
          {
            "id": 81,
            "nombre": "Cuchil (Cutchil)"
          },
          {
            "id": 82,
            "nombre": "Gima"
          },
          {
            "id": 83,
            "nombre": "Guel"
          },
          {
            "id": 84,
            "nombre": "Ludo"
          },
          {
            "id": 85,
            "nombre": "San Bartolomé"
          },
          {
            "id": 86,
            "nombre": "San José de Raranga"
          },
          {
            "id": 80,
            "nombre": "Sigsig"
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "nombre": "Bolívar",
    "cantones": [
      {
        "id": 21,
        "nombre": "Caluma",
        "parroquias": [
          {
            "id": 134,
            "nombre": "Caluma"
          }
        ]
      },
      {
        "id": 17,
        "nombre": "Chillanes",
        "parroquias": [
          {
            "id": 118,
            "nombre": "Chillanes"
          },
          {
            "id": 119,
            "nombre": "San José del Tambo (Tambopamba)"
          }
        ]
      },
      {
        "id": 18,
        "nombre": "Chimbo",
        "parroquias": [
          {
            "id": 121,
            "nombre": "Asunción (Asancoto)"
          },
          {
            "id": 122,
            "nombre": "Caluma"
          },
          {
            "id": 123,
            "nombre": "Magdalena (Chapacoto)"
          },
          {
            "id": 120,
            "nombre": "San José de Chimbo"
          },
          {
            "id": 124,
            "nombre": "San Sebastián"
          },
          {
            "id": 125,
            "nombre": "Telimbela"
          }
        ]
      },
      {
        "id": 19,
        "nombre": "Echeandía",
        "parroquias": [
          {
            "id": 126,
            "nombre": "Echeandía"
          }
        ]
      },
      {
        "id": 16,
        "nombre": "Guaranda",
        "parroquias": [
          {
            "id": 108,
            "nombre": "Facundo Vela"
          },
          {
            "id": 105,
            "nombre": "Gabriel Ignacio Veintimilla"
          },
          {
            "id": 106,
            "nombre": "Guanujo"
          },
          {
            "id": 109,
            "nombre": "Guanujo"
          },
          {
            "id": 107,
            "nombre": "Guaranda"
          },
          {
            "id": 110,
            "nombre": "Julio E. Moreno (Catanahuán Grande)"
          },
          {
            "id": 111,
            "nombre": "Las Naves"
          },
          {
            "id": 112,
            "nombre": "Salinas"
          },
          {
            "id": 113,
            "nombre": "San Lorenzo"
          },
          {
            "id": 117,
            "nombre": "San Luis de Pambil"
          },
          {
            "id": 114,
            "nombre": "San Simón (Yacoto)"
          },
          {
            "id": 115,
            "nombre": "Santa Fé (Santa Fé)"
          },
          {
            "id": 116,
            "nombre": "Simiátug"
          },
          {
            "id": 104,
            "nombre": "Ángel Polibio Cháves"
          }
        ]
      },
      {
        "id": 22,
        "nombre": "Las Naves",
        "parroquias": [
          {
            "id": 135,
            "nombre": "Las Mercedes"
          },
          {
            "id": 136,
            "nombre": "Las Naves"
          },
          {
            "id": 137,
            "nombre": "Las Naves"
          }
        ]
      },
      {
        "id": 20,
        "nombre": "San Miguel",
        "parroquias": [
          {
            "id": 128,
            "nombre": "Balsapamba"
          },
          {
            "id": 129,
            "nombre": "Bilován"
          },
          {
            "id": 130,
            "nombre": "Régulo de Mora"
          },
          {
            "id": 127,
            "nombre": "San Miguel"
          },
          {
            "id": 131,
            "nombre": "San Pablo (San Pablo de Atenas)"
          },
          {
            "id": 133,
            "nombre": "San Vicente"
          },
          {
            "id": 132,
            "nombre": "Santiago"
          }
        ]
      }
    ]
  },
  {
    "id": 4,
    "nombre": "Carchi",
    "cantones": [
      {
        "id": 31,
        "nombre": "Bolívar",
        "parroquias": [
          {
            "id": 193,
            "nombre": "Bolívar"
          },
          {
            "id": 194,
            "nombre": "García Moreno"
          },
          {
            "id": 195,
            "nombre": "Los Andes"
          },
          {
            "id": 196,
            "nombre": "Monte Olivo"
          },
          {
            "id": 198,
            "nombre": "San Rafael"
          },
          {
            "id": 197,
            "nombre": "San Vicente de Pusir"
          }
        ]
      },
      {
        "id": 32,
        "nombre": "Espejo",
        "parroquias": [
          {
            "id": 200,
            "nombre": "27 de Septiembre"
          },
          {
            "id": 201,
            "nombre": "El Angel"
          },
          {
            "id": 202,
            "nombre": "El Goaltal"
          },
          {
            "id": 199,
            "nombre": "El Ángel"
          },
          {
            "id": 203,
            "nombre": "La Libertad (Alizo)"
          },
          {
            "id": 204,
            "nombre": "San Isidro"
          }
        ]
      },
      {
        "id": 33,
        "nombre": "Mira",
        "parroquias": [
          {
            "id": 206,
            "nombre": "Concepción"
          },
          {
            "id": 207,
            "nombre": "Jijón Y Caamaño (Cab. En Río Blanco)"
          },
          {
            "id": 208,
            "nombre": "Juan Montalvo (San Ignacio de Quil)"
          },
          {
            "id": 205,
            "nombre": "Mira (Chontahuasi)"
          }
        ]
      },
      {
        "id": 34,
        "nombre": "Montúfar",
        "parroquias": [
          {
            "id": 213,
            "nombre": "Chitán de Navarrete"
          },
          {
            "id": 212,
            "nombre": "Cristóbal Colón"
          },
          {
            "id": 214,
            "nombre": "Fernández Salvador"
          },
          {
            "id": 209,
            "nombre": "González Suárez"
          },
          {
            "id": 215,
            "nombre": "La Paz"
          },
          {
            "id": 216,
            "nombre": "Piartal"
          },
          {
            "id": 211,
            "nombre": "San Gabriel"
          },
          {
            "id": 210,
            "nombre": "San José"
          }
        ]
      },
      {
        "id": 35,
        "nombre": "San Pedro de Huaca",
        "parroquias": [
          {
            "id": 217,
            "nombre": "Huaca"
          },
          {
            "id": 218,
            "nombre": "Mariscal Sucre"
          }
        ]
      },
      {
        "id": 30,
        "nombre": "Tulcán",
        "parroquias": [
          {
            "id": 182,
            "nombre": "El Carmelo (El Pun)"
          },
          {
            "id": 190,
            "nombre": "El Chical"
          },
          {
            "id": 179,
            "nombre": "González Suárez"
          },
          {
            "id": 183,
            "nombre": "Huaca"
          },
          {
            "id": 184,
            "nombre": "Julio Andrade (Orejuela)"
          },
          {
            "id": 185,
            "nombre": "Maldonado"
          },
          {
            "id": 191,
            "nombre": "Mariscal Sucre"
          },
          {
            "id": 186,
            "nombre": "Pioter"
          },
          {
            "id": 192,
            "nombre": "Santa Martha de Cuba"
          },
          {
            "id": 187,
            "nombre": "Tobar Donoso (La Bocana de Camumbí)"
          },
          {
            "id": 188,
            "nombre": "Tufiño"
          },
          {
            "id": 180,
            "nombre": "Tulcán"
          },
          {
            "id": 181,
            "nombre": "Tulcán"
          },
          {
            "id": 189,
            "nombre": "Urbina (Taya)"
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "nombre": "Cañar",
    "cantones": [
      {
        "id": 23,
        "nombre": "Azogues",
        "parroquias": [
          {
            "id": 138,
            "nombre": "Aurelio Bayas Martínez"
          },
          {
            "id": 139,
            "nombre": "Azogues"
          },
          {
            "id": 142,
            "nombre": "Azogues"
          },
          {
            "id": 140,
            "nombre": "Borrero"
          },
          {
            "id": 143,
            "nombre": "Cojitambo"
          },
          {
            "id": 144,
            "nombre": "Déleg"
          },
          {
            "id": 145,
            "nombre": "Guapán"
          },
          {
            "id": 146,
            "nombre": "Javier Loyola (Chuquipata)"
          },
          {
            "id": 147,
            "nombre": "Luis Cordero"
          },
          {
            "id": 148,
            "nombre": "Pindilig"
          },
          {
            "id": 149,
            "nombre": "Rivera"
          },
          {
            "id": 141,
            "nombre": "San Francisco"
          },
          {
            "id": 150,
            "nombre": "San Miguel"
          },
          {
            "id": 151,
            "nombre": "Solano"
          },
          {
            "id": 152,
            "nombre": "Taday"
          }
        ]
      },
      {
        "id": 24,
        "nombre": "Biblián",
        "parroquias": [
          {
            "id": 153,
            "nombre": "Biblián"
          },
          {
            "id": 157,
            "nombre": "Jerusalén"
          },
          {
            "id": 154,
            "nombre": "Nazón (Cab. En Pampa de Domínguez)"
          },
          {
            "id": 155,
            "nombre": "San Francisco de Sageo"
          },
          {
            "id": 156,
            "nombre": "Turupamba"
          }
        ]
      },
      {
        "id": 25,
        "nombre": "Cañar",
        "parroquias": [
          {
            "id": 158,
            "nombre": "Cañar"
          },
          {
            "id": 159,
            "nombre": "Chontamarca"
          },
          {
            "id": 160,
            "nombre": "Chorocopte"
          },
          {
            "id": 171,
            "nombre": "Ducur"
          },
          {
            "id": 161,
            "nombre": "General Morales (Socarte)"
          },
          {
            "id": 162,
            "nombre": "Gualleturo"
          },
          {
            "id": 163,
            "nombre": "Honorato Vásquez (Tambo Viejo)"
          },
          {
            "id": 164,
            "nombre": "Ingapirca"
          },
          {
            "id": 165,
            "nombre": "Juncal"
          },
          {
            "id": 166,
            "nombre": "San Antonio"
          },
          {
            "id": 167,
            "nombre": "Suscal"
          },
          {
            "id": 168,
            "nombre": "Tambo"
          },
          {
            "id": 170,
            "nombre": "Ventura"
          },
          {
            "id": 169,
            "nombre": "Zhud"
          }
        ]
      },
      {
        "id": 28,
        "nombre": "Déleg",
        "parroquias": [
          {
            "id": 176,
            "nombre": "Déleg"
          },
          {
            "id": 177,
            "nombre": "Solano"
          }
        ]
      },
      {
        "id": 27,
        "nombre": "El Tambo",
        "parroquias": [
          {
            "id": 175,
            "nombre": "El Tambo"
          }
        ]
      },
      {
        "id": 26,
        "nombre": "La Troncal",
        "parroquias": [
          {
            "id": 172,
            "nombre": "La Troncal"
          },
          {
            "id": 173,
            "nombre": "Manuel J. Calle"
          },
          {
            "id": 174,
            "nombre": "Pancho Negro"
          }
        ]
      },
      {
        "id": 29,
        "nombre": "Suscal",
        "parroquias": [
          {
            "id": 178,
            "nombre": "Suscal"
          }
        ]
      }
    ]
  },
  {
    "id": 6,
    "nombre": "Chimborazo",
    "cantones": [
      {
        "id": 44,
        "nombre": "Alausi",
        "parroquias": [
          {
            "id": 290,
            "nombre": "Achupallas"
          },
          {
            "id": 289,
            "nombre": "Alausí"
          },
          {
            "id": 291,
            "nombre": "Cumandá"
          },
          {
            "id": 292,
            "nombre": "Guasuntos"
          },
          {
            "id": 293,
            "nombre": "Huigra"
          },
          {
            "id": 294,
            "nombre": "Multitud"
          },
          {
            "id": 295,
            "nombre": "Pistishí (Nariz del Diablo)"
          },
          {
            "id": 296,
            "nombre": "Pumallacta"
          },
          {
            "id": 297,
            "nombre": "Sevilla"
          },
          {
            "id": 298,
            "nombre": "Sibambe"
          },
          {
            "id": 299,
            "nombre": "Tixán"
          }
        ]
      },
      {
        "id": 46,
        "nombre": "Chambo",
        "parroquias": [
          {
            "id": 307,
            "nombre": "Chambo"
          }
        ]
      },
      {
        "id": 47,
        "nombre": "Chunchi",
        "parroquias": [
          {
            "id": 309,
            "nombre": "Capzol"
          },
          {
            "id": 308,
            "nombre": "Chunchi"
          },
          {
            "id": 310,
            "nombre": "Compud"
          },
          {
            "id": 311,
            "nombre": "Gonzol"
          },
          {
            "id": 312,
            "nombre": "Llagos"
          }
        ]
      },
      {
        "id": 45,
        "nombre": "Colta",
        "parroquias": [
          {
            "id": 300,
            "nombre": "Cajabamba"
          },
          {
            "id": 303,
            "nombre": "Cañi"
          },
          {
            "id": 304,
            "nombre": "Columbe"
          },
          {
            "id": 305,
            "nombre": "Juan de Velasco (Pangor)"
          },
          {
            "id": 306,
            "nombre": "Santiago de Quito (Cab. En San Antonio de Quito)"
          },
          {
            "id": 301,
            "nombre": "Sicalpa"
          },
          {
            "id": 302,
            "nombre": "Villa La Unión (Cajabamba)"
          }
        ]
      },
      {
        "id": 52,
        "nombre": "Cumandá",
        "parroquias": [
          {
            "id": 336,
            "nombre": "Cumandá"
          }
        ]
      },
      {
        "id": 48,
        "nombre": "Guamote",
        "parroquias": [
          {
            "id": 314,
            "nombre": "Cebadas"
          },
          {
            "id": 313,
            "nombre": "Guamote"
          },
          {
            "id": 315,
            "nombre": "Palmira"
          }
        ]
      },
      {
        "id": 49,
        "nombre": "Guano",
        "parroquias": [
          {
            "id": 316,
            "nombre": "El Rosario"
          },
          {
            "id": 319,
            "nombre": "Guanando"
          },
          {
            "id": 318,
            "nombre": "Guano"
          },
          {
            "id": 320,
            "nombre": "Ilapo"
          },
          {
            "id": 317,
            "nombre": "La Matriz"
          },
          {
            "id": 321,
            "nombre": "La Providencia"
          },
          {
            "id": 322,
            "nombre": "San Andrés"
          },
          {
            "id": 323,
            "nombre": "San Gerardo de Pacaicaguán"
          },
          {
            "id": 324,
            "nombre": "San Isidro de Patulú"
          },
          {
            "id": 325,
            "nombre": "San José del Chazo"
          },
          {
            "id": 326,
            "nombre": "Santa Fé de Galán"
          },
          {
            "id": 327,
            "nombre": "Valparaíso"
          }
        ]
      },
      {
        "id": 50,
        "nombre": "Pallatanga",
        "parroquias": [
          {
            "id": 328,
            "nombre": "Pallatanga"
          }
        ]
      },
      {
        "id": 51,
        "nombre": "Penipe",
        "parroquias": [
          {
            "id": 335,
            "nombre": "Bilbao (Cab.En Quilluyacu)"
          },
          {
            "id": 330,
            "nombre": "El Altar"
          },
          {
            "id": 334,
            "nombre": "La Candelaria"
          },
          {
            "id": 331,
            "nombre": "Matus"
          },
          {
            "id": 329,
            "nombre": "Penipe"
          },
          {
            "id": 332,
            "nombre": "Puela"
          },
          {
            "id": 333,
            "nombre": "San Antonio de Bayushig"
          }
        ]
      },
      {
        "id": 43,
        "nombre": "Riobamba",
        "parroquias": [
          {
            "id": 278,
            "nombre": "Cacha (Cab. En Machángara)"
          },
          {
            "id": 279,
            "nombre": "Calpi"
          },
          {
            "id": 280,
            "nombre": "Cubijíes"
          },
          {
            "id": 281,
            "nombre": "Flores"
          },
          {
            "id": 283,
            "nombre": "Licto"
          },
          {
            "id": 282,
            "nombre": "Licán"
          },
          {
            "id": 272,
            "nombre": "Lizarzaburu"
          },
          {
            "id": 273,
            "nombre": "Maldonado"
          },
          {
            "id": 284,
            "nombre": "Pungalá"
          },
          {
            "id": 285,
            "nombre": "Punín"
          },
          {
            "id": 286,
            "nombre": "Quimiag"
          },
          {
            "id": 277,
            "nombre": "Riobamba"
          },
          {
            "id": 287,
            "nombre": "San Juan"
          },
          {
            "id": 288,
            "nombre": "San Luis"
          },
          {
            "id": 274,
            "nombre": "Velasco"
          },
          {
            "id": 275,
            "nombre": "Veloz"
          },
          {
            "id": 276,
            "nombre": "Yaruquíes"
          }
        ]
      }
    ]
  },
  {
    "id": 5,
    "nombre": "Cotopaxi",
    "cantones": [
      {
        "id": 37,
        "nombre": "La Maná",
        "parroquias": [
          {
            "id": 238,
            "nombre": "El Carmen"
          },
          {
            "id": 240,
            "nombre": "El Triunfo"
          },
          {
            "id": 242,
            "nombre": "Guasaganda (Cab.En Guasaganda"
          },
          {
            "id": 239,
            "nombre": "La Maná"
          },
          {
            "id": 241,
            "nombre": "La Maná"
          },
          {
            "id": 243,
            "nombre": "Pucayacu"
          }
        ]
      },
      {
        "id": 36,
        "nombre": "Latacunga",
        "parroquias": [
          {
            "id": 231,
            "nombre": "11 de Noviembre (Ilinchisi)"
          },
          {
            "id": 225,
            "nombre": "Alaques (Aláquez)"
          },
          {
            "id": 226,
            "nombre": "Belisario Quevedo (Guanailín)"
          },
          {
            "id": 219,
            "nombre": "Eloy Alfaro (San Felipe)"
          },
          {
            "id": 227,
            "nombre": "Guaitacama (Guaytacama)"
          },
          {
            "id": 220,
            "nombre": "Ignacio Flores (Parque Flores)"
          },
          {
            "id": 228,
            "nombre": "Joseguango Bajo"
          },
          {
            "id": 221,
            "nombre": "Juan Montalvo (San Sebastián)"
          },
          {
            "id": 222,
            "nombre": "La Matriz"
          },
          {
            "id": 229,
            "nombre": "Las Pampas"
          },
          {
            "id": 224,
            "nombre": "Latacunga"
          },
          {
            "id": 230,
            "nombre": "Mulaló"
          },
          {
            "id": 237,
            "nombre": "Palo Quemado"
          },
          {
            "id": 232,
            "nombre": "Poaló"
          },
          {
            "id": 223,
            "nombre": "San Buenaventura"
          },
          {
            "id": 233,
            "nombre": "San Juan de Pastocalle"
          },
          {
            "id": 234,
            "nombre": "Sigchos"
          },
          {
            "id": 235,
            "nombre": "Tanicuchí"
          },
          {
            "id": 236,
            "nombre": "Toacaso"
          }
        ]
      },
      {
        "id": 38,
        "nombre": "Pangua",
        "parroquias": [
          {
            "id": 244,
            "nombre": "El Corazón"
          },
          {
            "id": 245,
            "nombre": "Moraspungo"
          },
          {
            "id": 246,
            "nombre": "Pinllopata"
          },
          {
            "id": 247,
            "nombre": "Ramón Campaña"
          }
        ]
      },
      {
        "id": 39,
        "nombre": "Pujili",
        "parroquias": [
          {
            "id": 249,
            "nombre": "Angamarca"
          },
          {
            "id": 250,
            "nombre": "Chucchilán (Chugchilán)"
          },
          {
            "id": 251,
            "nombre": "Guangaje"
          },
          {
            "id": 252,
            "nombre": "Isinlibí (Isinliví)"
          },
          {
            "id": 253,
            "nombre": "La Victoria"
          },
          {
            "id": 254,
            "nombre": "Pilaló"
          },
          {
            "id": 248,
            "nombre": "Pujilí"
          },
          {
            "id": 255,
            "nombre": "Tingo"
          },
          {
            "id": 256,
            "nombre": "Zumbahua"
          }
        ]
      },
      {
        "id": 40,
        "nombre": "Salcedo",
        "parroquias": [
          {
            "id": 258,
            "nombre": "Antonio José Holguín (Santa Lucía)"
          },
          {
            "id": 259,
            "nombre": "Cusubamba"
          },
          {
            "id": 260,
            "nombre": "Mulalillo"
          },
          {
            "id": 261,
            "nombre": "Mulliquindil (Santa Ana)"
          },
          {
            "id": 262,
            "nombre": "Pansaleo"
          },
          {
            "id": 257,
            "nombre": "San Miguel"
          }
        ]
      },
      {
        "id": 41,
        "nombre": "Saquisilí",
        "parroquias": [
          {
            "id": 264,
            "nombre": "Canchagua"
          },
          {
            "id": 265,
            "nombre": "Chantilín"
          },
          {
            "id": 266,
            "nombre": "Cochapamba"
          },
          {
            "id": 263,
            "nombre": "Saquisilí"
          }
        ]
      },
      {
        "id": 42,
        "nombre": "Sigchos",
        "parroquias": [
          {
            "id": 268,
            "nombre": "Chugchillán"
          },
          {
            "id": 269,
            "nombre": "Isinliví"
          },
          {
            "id": 270,
            "nombre": "Las Pampas"
          },
          {
            "id": 271,
            "nombre": "Palo Quemado"
          },
          {
            "id": 267,
            "nombre": "Sigchos"
          }
        ]
      }
    ]
  },
  {
    "id": 7,
    "nombre": "El Oro",
    "cantones": [
      {
        "id": 54,
        "nombre": "Arenillas",
        "parroquias": [
          {
            "id": 345,
            "nombre": "Arenillas"
          },
          {
            "id": 350,
            "nombre": "Carcabón"
          },
          {
            "id": 346,
            "nombre": "Chacras"
          },
          {
            "id": 347,
            "nombre": "La Libertad"
          },
          {
            "id": 348,
            "nombre": "Las Lajas (Cab. En La Victoria)"
          },
          {
            "id": 349,
            "nombre": "Palmales"
          }
        ]
      },
      {
        "id": 55,
        "nombre": "Atahualpa",
        "parroquias": [
          {
            "id": 352,
            "nombre": "Ayapamba"
          },
          {
            "id": 353,
            "nombre": "Cordoncillo"
          },
          {
            "id": 354,
            "nombre": "Milagro"
          },
          {
            "id": 351,
            "nombre": "Paccha"
          },
          {
            "id": 355,
            "nombre": "San José"
          },
          {
            "id": 356,
            "nombre": "San Juan de Cerro Azul"
          }
        ]
      },
      {
        "id": 56,
        "nombre": "Balsas",
        "parroquias": [
          {
            "id": 357,
            "nombre": "Balsas"
          },
          {
            "id": 358,
            "nombre": "Bellamaría"
          }
        ]
      },
      {
        "id": 57,
        "nombre": "Chilla",
        "parroquias": [
          {
            "id": 359,
            "nombre": "Chilla"
          }
        ]
      },
      {
        "id": 58,
        "nombre": "El Guabo",
        "parroquias": [
          {
            "id": 361,
            "nombre": "Barbones (Sucre)"
          },
          {
            "id": 360,
            "nombre": "El Guabo"
          },
          {
            "id": 362,
            "nombre": "La Iberia"
          },
          {
            "id": 364,
            "nombre": "Río Bonito"
          },
          {
            "id": 363,
            "nombre": "Tendales (Cab.En Puerto Tendales)"
          }
        ]
      },
      {
        "id": 59,
        "nombre": "Huaquillas",
        "parroquias": [
          {
            "id": 365,
            "nombre": "Ecuador"
          },
          {
            "id": 366,
            "nombre": "El Paraíso"
          },
          {
            "id": 367,
            "nombre": "Hualtaco"
          },
          {
            "id": 370,
            "nombre": "Huaquillas"
          },
          {
            "id": 368,
            "nombre": "Milton Reyes"
          },
          {
            "id": 369,
            "nombre": "Unión Lojana"
          }
        ]
      },
      {
        "id": 66,
        "nombre": "Las Lajas",
        "parroquias": [
          {
            "id": 426,
            "nombre": "El Paraíso"
          },
          {
            "id": 425,
            "nombre": "La Libertad"
          },
          {
            "id": 421,
            "nombre": "La Victoria"
          },
          {
            "id": 424,
            "nombre": "La Victoria"
          },
          {
            "id": 422,
            "nombre": "Platanillos"
          },
          {
            "id": 427,
            "nombre": "San Isidro"
          },
          {
            "id": 423,
            "nombre": "Valle Hermoso"
          }
        ]
      },
      {
        "id": 53,
        "nombre": "Machala",
        "parroquias": [
          {
            "id": 341,
            "nombre": "El Cambio"
          },
          {
            "id": 343,
            "nombre": "El Cambio"
          },
          {
            "id": 344,
            "nombre": "El Retiro"
          },
          {
            "id": 337,
            "nombre": "La Providencia"
          },
          {
            "id": 338,
            "nombre": "Machala"
          },
          {
            "id": 342,
            "nombre": "Machala"
          },
          {
            "id": 340,
            "nombre": "Nueve de Mayo"
          },
          {
            "id": 339,
            "nombre": "Puerto Bolívar"
          }
        ]
      },
      {
        "id": 60,
        "nombre": "Marcabelí",
        "parroquias": [
          {
            "id": 372,
            "nombre": "El Ingenio"
          },
          {
            "id": 371,
            "nombre": "Marcabelí"
          }
        ]
      },
      {
        "id": 61,
        "nombre": "Pasaje",
        "parroquias": [
          {
            "id": 373,
            "nombre": "Bolívar"
          },
          {
            "id": 378,
            "nombre": "Buenavista"
          },
          {
            "id": 379,
            "nombre": "Casacay"
          },
          {
            "id": 383,
            "nombre": "Cañaquemada"
          },
          {
            "id": 380,
            "nombre": "La Peaña"
          },
          {
            "id": 374,
            "nombre": "Loma de Franco"
          },
          {
            "id": 375,
            "nombre": "Ochoa León (Matriz)"
          },
          {
            "id": 377,
            "nombre": "Pasaje"
          },
          {
            "id": 381,
            "nombre": "Progreso"
          },
          {
            "id": 376,
            "nombre": "Tres Cerritos"
          },
          {
            "id": 382,
            "nombre": "Uzhcurrumi"
          }
        ]
      },
      {
        "id": 62,
        "nombre": "Piñas",
        "parroquias": [
          {
            "id": 388,
            "nombre": "Capiro (Cab. En La Capilla de Capiro)"
          },
          {
            "id": 389,
            "nombre": "La Bocana"
          },
          {
            "id": 384,
            "nombre": "La Matriz"
          },
          {
            "id": 385,
            "nombre": "La Susaya"
          },
          {
            "id": 390,
            "nombre": "Moromoro (Cab. En El Vado)"
          },
          {
            "id": 391,
            "nombre": "Piedras"
          },
          {
            "id": 387,
            "nombre": "Piñas"
          },
          {
            "id": 386,
            "nombre": "Piñas Grande"
          },
          {
            "id": 392,
            "nombre": "San Roque (Ambrosio Maldonado)"
          },
          {
            "id": 393,
            "nombre": "Saracay"
          }
        ]
      },
      {
        "id": 63,
        "nombre": "Portovelo",
        "parroquias": [
          {
            "id": 395,
            "nombre": "Curtincapa"
          },
          {
            "id": 396,
            "nombre": "Morales"
          },
          {
            "id": 394,
            "nombre": "Portovelo"
          },
          {
            "id": 397,
            "nombre": "Salatí"
          }
        ]
      },
      {
        "id": 64,
        "nombre": "Santa Rosa",
        "parroquias": [
          {
            "id": 400,
            "nombre": "Balneario Jambelí (Satélite)"
          },
          {
            "id": 410,
            "nombre": "Bellamaría"
          },
          {
            "id": 404,
            "nombre": "Bellavista"
          },
          {
            "id": 405,
            "nombre": "Jambelí"
          },
          {
            "id": 401,
            "nombre": "Jumón (Satélite)"
          },
          {
            "id": 406,
            "nombre": "La Avanzada"
          },
          {
            "id": 402,
            "nombre": "Nuevo Santa Rosa"
          },
          {
            "id": 399,
            "nombre": "Puerto Jelí"
          },
          {
            "id": 407,
            "nombre": "San Antonio"
          },
          {
            "id": 398,
            "nombre": "Santa Rosa"
          },
          {
            "id": 403,
            "nombre": "Santa Rosa"
          },
          {
            "id": 408,
            "nombre": "Torata"
          },
          {
            "id": 409,
            "nombre": "Victoria"
          }
        ]
      },
      {
        "id": 65,
        "nombre": "Zaruma",
        "parroquias": [
          {
            "id": 412,
            "nombre": "Abañín"
          },
          {
            "id": 413,
            "nombre": "Arcapamba"
          },
          {
            "id": 414,
            "nombre": "Guanazán"
          },
          {
            "id": 415,
            "nombre": "Guizhaguiña"
          },
          {
            "id": 416,
            "nombre": "Huertas"
          },
          {
            "id": 417,
            "nombre": "Malvas"
          },
          {
            "id": 418,
            "nombre": "Muluncay Grande"
          },
          {
            "id": 420,
            "nombre": "Salvias"
          },
          {
            "id": 419,
            "nombre": "Sinsao"
          },
          {
            "id": 411,
            "nombre": "Zaruma"
          }
        ]
      }
    ]
  },
  {
    "id": 8,
    "nombre": "Esmeraldas",
    "cantones": [
      {
        "id": 72,
        "nombre": "Atacames",
        "parroquias": [
          {
            "id": 495,
            "nombre": "Atacames"
          },
          {
            "id": 496,
            "nombre": "La Unión"
          },
          {
            "id": 497,
            "nombre": "Súa (Cab. En La Bocana)"
          },
          {
            "id": 498,
            "nombre": "Tonchigüe"
          },
          {
            "id": 499,
            "nombre": "Tonsupa"
          }
        ]
      },
      {
        "id": 68,
        "nombre": "Eloy Alfaro",
        "parroquias": [
          {
            "id": 453,
            "nombre": "Anchayacu"
          },
          {
            "id": 454,
            "nombre": "Atahualpa (Cab. En Camarones)"
          },
          {
            "id": 455,
            "nombre": "Borbón"
          },
          {
            "id": 464,
            "nombre": "Colón Eloy del María"
          },
          {
            "id": 456,
            "nombre": "La Tola"
          },
          {
            "id": 457,
            "nombre": "Luis Vargas Torres (Cab. En Playa de Oro)"
          },
          {
            "id": 458,
            "nombre": "Maldonado"
          },
          {
            "id": 459,
            "nombre": "Pampanal de Bolívar"
          },
          {
            "id": 460,
            "nombre": "San Francisco de Onzole"
          },
          {
            "id": 465,
            "nombre": "San José de Cayapas"
          },
          {
            "id": 461,
            "nombre": "Santo Domingo de Onzole"
          },
          {
            "id": 462,
            "nombre": "Selva Alegre"
          },
          {
            "id": 463,
            "nombre": "Telembí"
          },
          {
            "id": 466,
            "nombre": "Timbiré"
          },
          {
            "id": 452,
            "nombre": "Valdez (Limones)"
          }
        ]
      },
      {
        "id": 67,
        "nombre": "Esmeraldas",
        "parroquias": [
          {
            "id": 429,
            "nombre": "5 de Agosto"
          },
          {
            "id": 434,
            "nombre": "Atacames"
          },
          {
            "id": 428,
            "nombre": "Bartolomé Ruiz (César Franco Carrión)"
          },
          {
            "id": 435,
            "nombre": "Camarones (Cab. En San Vicente)"
          },
          {
            "id": 437,
            "nombre": "Chinca"
          },
          {
            "id": 438,
            "nombre": "Chontaduro"
          },
          {
            "id": 439,
            "nombre": "Chumundé"
          },
          {
            "id": 436,
            "nombre": "Crnel. Carlos Concha Torres (Cab.En Huele)"
          },
          {
            "id": 430,
            "nombre": "Esmeraldas"
          },
          {
            "id": 433,
            "nombre": "Esmeraldas"
          },
          {
            "id": 441,
            "nombre": "La Unión"
          },
          {
            "id": 440,
            "nombre": "Lagarto"
          },
          {
            "id": 431,
            "nombre": "Luis Tello (Las Palmas)"
          },
          {
            "id": 442,
            "nombre": "Majua"
          },
          {
            "id": 443,
            "nombre": "Montalvo (Cab. En Horqueta)"
          },
          {
            "id": 445,
            "nombre": "Rocafuerte"
          },
          {
            "id": 444,
            "nombre": "Río Verde"
          },
          {
            "id": 446,
            "nombre": "San Mateo"
          },
          {
            "id": 432,
            "nombre": "Simón Plata Torres"
          },
          {
            "id": 447,
            "nombre": "Súa (Cab. En La Bocana)"
          },
          {
            "id": 448,
            "nombre": "Tabiazo"
          },
          {
            "id": 449,
            "nombre": "Tachina"
          },
          {
            "id": 450,
            "nombre": "Tonchigüe"
          },
          {
            "id": 451,
            "nombre": "Vuelta Larga"
          }
        ]
      },
      {
        "id": 74,
        "nombre": "La Concordia",
        "parroquias": [
          {
            "id": 506,
            "nombre": "La Concordia"
          },
          {
            "id": 508,
            "nombre": "La Villegas"
          },
          {
            "id": 507,
            "nombre": "Monterrey"
          },
          {
            "id": 509,
            "nombre": "Plan Piloto"
          }
        ]
      },
      {
        "id": 69,
        "nombre": "Muisne",
        "parroquias": [
          {
            "id": 468,
            "nombre": "Bolívar"
          },
          {
            "id": 469,
            "nombre": "Daule"
          },
          {
            "id": 470,
            "nombre": "Galera"
          },
          {
            "id": 467,
            "nombre": "Muisne"
          },
          {
            "id": 471,
            "nombre": "Quingue (Olmedo Perdomo Franco)"
          },
          {
            "id": 472,
            "nombre": "Salima"
          },
          {
            "id": 473,
            "nombre": "San Francisco"
          },
          {
            "id": 474,
            "nombre": "San Gregorio"
          },
          {
            "id": 475,
            "nombre": "San José de Chamanga (Cab.En Chamanga)"
          }
        ]
      },
      {
        "id": 70,
        "nombre": "Quinindé",
        "parroquias": [
          {
            "id": 478,
            "nombre": "Chura (Chancama) (Cab. En El Yerbero)"
          },
          {
            "id": 477,
            "nombre": "Cube"
          },
          {
            "id": 481,
            "nombre": "La Unión"
          },
          {
            "id": 479,
            "nombre": "Malimpia"
          },
          {
            "id": 476,
            "nombre": "Rosa Zárate (Quinindé)"
          },
          {
            "id": 480,
            "nombre": "Viche"
          }
        ]
      },
      {
        "id": 73,
        "nombre": "Rioverde",
        "parroquias": [
          {
            "id": 501,
            "nombre": "Chontaduro"
          },
          {
            "id": 502,
            "nombre": "Chumundé"
          },
          {
            "id": 503,
            "nombre": "Lagarto"
          },
          {
            "id": 504,
            "nombre": "Montalvo (Cab. En Horqueta)"
          },
          {
            "id": 500,
            "nombre": "Rioverde"
          },
          {
            "id": 505,
            "nombre": "Rocafuerte"
          }
        ]
      },
      {
        "id": 71,
        "nombre": "San Lorenzo",
        "parroquias": [
          {
            "id": 487,
            "nombre": "5 de Junio (Cab. En Uimbi)"
          },
          {
            "id": 483,
            "nombre": "Alto Tambo (Cab. En Guadual)"
          },
          {
            "id": 484,
            "nombre": "Ancón (Pichangal) (Cab. En Palma Real)"
          },
          {
            "id": 485,
            "nombre": "Calderón"
          },
          {
            "id": 486,
            "nombre": "Carondelet"
          },
          {
            "id": 488,
            "nombre": "Concepción"
          },
          {
            "id": 489,
            "nombre": "Mataje (Cab. En Santander)"
          },
          {
            "id": 490,
            "nombre": "San Javier de Cachaví (Cab. En San Javier)"
          },
          {
            "id": 482,
            "nombre": "San Lorenzo"
          },
          {
            "id": 491,
            "nombre": "Santa Rita"
          },
          {
            "id": 492,
            "nombre": "Tambillo"
          },
          {
            "id": 493,
            "nombre": "Tululbí (Cab. En Ricaurte)"
          },
          {
            "id": 494,
            "nombre": "Urbina"
          }
        ]
      }
    ]
  },
  {
    "id": 20,
    "nombre": "Galápagos",
    "cantones": [
      {
        "id": 205,
        "nombre": "Isabela",
        "parroquias": [
          {
            "id": 1288,
            "nombre": "Puerto Villamil"
          },
          {
            "id": 1289,
            "nombre": "Tomás de Berlanga (Santo Tomás)"
          }
        ]
      },
      {
        "id": 204,
        "nombre": "San Cristóbal",
        "parroquias": [
          {
            "id": 1286,
            "nombre": "El Progreso"
          },
          {
            "id": 1287,
            "nombre": "Isla Santa María (Floreana) (Cab. En Pto. Velasco Ibarra)"
          },
          {
            "id": 1285,
            "nombre": "Puerto Baquerizo Moreno"
          }
        ]
      },
      {
        "id": 206,
        "nombre": "Santa Cruz",
        "parroquias": [
          {
            "id": 1291,
            "nombre": "Bellavista"
          },
          {
            "id": 1290,
            "nombre": "Puerto Ayora"
          },
          {
            "id": 1292,
            "nombre": "Santa Rosa (Incluye La Isla Baltra)"
          }
        ]
      }
    ]
  },
  {
    "id": 9,
    "nombre": "Guayas",
    "cantones": [
      {
        "id": 76,
        "nombre": "Alfredo Baquerizo Moreno (Juján)",
        "parroquias": [
          {
            "id": 534,
            "nombre": "Alfredo Baquerizo Moreno (Juján)"
          }
        ]
      },
      {
        "id": 77,
        "nombre": "Balao",
        "parroquias": [
          {
            "id": 535,
            "nombre": "Balao"
          }
        ]
      },
      {
        "id": 78,
        "nombre": "Balzar",
        "parroquias": [
          {
            "id": 536,
            "nombre": "Balzar"
          }
        ]
      },
      {
        "id": 79,
        "nombre": "Colimes",
        "parroquias": [
          {
            "id": 537,
            "nombre": "Colimes"
          },
          {
            "id": 538,
            "nombre": "San Jacinto"
          }
        ]
      },
      {
        "id": 95,
        "nombre": "Coronel Marcelino Maridueña",
        "parroquias": [
          {
            "id": 601,
            "nombre": "Coronel Marcelino Maridueña (San Carlos)"
          }
        ]
      },
      {
        "id": 80,
        "nombre": "Daule",
        "parroquias": [
          {
            "id": 541,
            "nombre": "Banife"
          },
          {
            "id": 539,
            "nombre": "Daule"
          },
          {
            "id": 547,
            "nombre": "Daule"
          },
          {
            "id": 542,
            "nombre": "Emiliano Caicedo Marcos"
          },
          {
            "id": 548,
            "nombre": "Isidro Ayora (Soledad)"
          },
          {
            "id": 549,
            "nombre": "Juan Bautista Aguirre (Los Tintos)"
          },
          {
            "id": 540,
            "nombre": "La Aurora (Satélite)"
          },
          {
            "id": 550,
            "nombre": "Laurel"
          },
          {
            "id": 551,
            "nombre": "Limonal"
          },
          {
            "id": 552,
            "nombre": "Lomas de Sargentillo"
          },
          {
            "id": 553,
            "nombre": "Los Lojas (Enrique Baquerizo Moreno)"
          },
          {
            "id": 543,
            "nombre": "Magro"
          },
          {
            "id": 544,
            "nombre": "Padre Juan Bautista Aguirre"
          },
          {
            "id": 554,
            "nombre": "Piedrahita (Nobol)"
          },
          {
            "id": 545,
            "nombre": "Santa Clara"
          },
          {
            "id": 546,
            "nombre": "Vicente Piedrahita"
          }
        ]
      },
      {
        "id": 81,
        "nombre": "Durán",
        "parroquias": [
          {
            "id": 556,
            "nombre": "El Recreo"
          },
          {
            "id": 555,
            "nombre": "Eloy Alfaro (Durán)"
          },
          {
            "id": 557,
            "nombre": "Eloy Alfaro (Durán)"
          }
        ]
      },
      {
        "id": 82,
        "nombre": "El Empalme",
        "parroquias": [
          {
            "id": 560,
            "nombre": "El Rosario"
          },
          {
            "id": 559,
            "nombre": "Guayas (Pueblo Nuevo)"
          },
          {
            "id": 558,
            "nombre": "Velasco Ibarra (El Empalme)"
          }
        ]
      },
      {
        "id": 83,
        "nombre": "El Triunfo",
        "parroquias": [
          {
            "id": 561,
            "nombre": "El Triunfo"
          }
        ]
      },
      {
        "id": 98,
        "nombre": "General Antonio Elizalde",
        "parroquias": [
          {
            "id": 605,
            "nombre": "General Antonio Elizalde (Bucay)"
          }
        ]
      },
      {
        "id": 75,
        "nombre": "Guayaquil",
        "parroquias": [
          {
            "id": 510,
            "nombre": "Ayacucho"
          },
          {
            "id": 511,
            "nombre": "Bolívar (Sagrario)"
          },
          {
            "id": 512,
            "nombre": "Carbo (Concepción)"
          },
          {
            "id": 526,
            "nombre": "Chongón"
          },
          {
            "id": 513,
            "nombre": "Febres Cordero"
          },
          {
            "id": 514,
            "nombre": "García Moreno"
          },
          {
            "id": 525,
            "nombre": "Guayaquil"
          },
          {
            "id": 527,
            "nombre": "Juan Gómez Rendón (Progreso)"
          },
          {
            "id": 515,
            "nombre": "Letamendi"
          },
          {
            "id": 528,
            "nombre": "Morro"
          },
          {
            "id": 516,
            "nombre": "Nueve de Octubre"
          },
          {
            "id": 517,
            "nombre": "Olmedo (San Alejo)"
          },
          {
            "id": 524,
            "nombre": "Pascuales"
          },
          {
            "id": 529,
            "nombre": "Pascuales"
          },
          {
            "id": 530,
            "nombre": "Playas (Gral. Villamil)"
          },
          {
            "id": 531,
            "nombre": "Posorja"
          },
          {
            "id": 532,
            "nombre": "Puná"
          },
          {
            "id": 518,
            "nombre": "Roca"
          },
          {
            "id": 519,
            "nombre": "Rocafuerte"
          },
          {
            "id": 520,
            "nombre": "Sucre"
          },
          {
            "id": 521,
            "nombre": "Tarqui"
          },
          {
            "id": 533,
            "nombre": "Tenguel"
          },
          {
            "id": 522,
            "nombre": "Urdaneta"
          },
          {
            "id": 523,
            "nombre": "Ximena"
          }
        ]
      },
      {
        "id": 99,
        "nombre": "Isidro Ayora",
        "parroquias": [
          {
            "id": 606,
            "nombre": "Isidro Ayora"
          }
        ]
      },
      {
        "id": 96,
        "nombre": "Lomas de Sargentillo",
        "parroquias": [
          {
            "id": 603,
            "nombre": "Isidro Ayora (Soledad)"
          },
          {
            "id": 602,
            "nombre": "Lomas de Sargentillo"
          }
        ]
      },
      {
        "id": 84,
        "nombre": "Milagro",
        "parroquias": [
          {
            "id": 563,
            "nombre": "Chobo"
          },
          {
            "id": 564,
            "nombre": "General Elizalde (Bucay)"
          },
          {
            "id": 565,
            "nombre": "Mariscal Sucre (Huaques)"
          },
          {
            "id": 562,
            "nombre": "Milagro"
          },
          {
            "id": 566,
            "nombre": "Roberto Astudillo (Cab. En Cruce de Venecia)"
          }
        ]
      },
      {
        "id": 85,
        "nombre": "Naranjal",
        "parroquias": [
          {
            "id": 568,
            "nombre": "Jesús María"
          },
          {
            "id": 567,
            "nombre": "Naranjal"
          },
          {
            "id": 569,
            "nombre": "San Carlos"
          },
          {
            "id": 570,
            "nombre": "Santa Rosa de Flandes"
          },
          {
            "id": 571,
            "nombre": "Taura"
          }
        ]
      },
      {
        "id": 86,
        "nombre": "Naranjito",
        "parroquias": [
          {
            "id": 572,
            "nombre": "Naranjito"
          }
        ]
      },
      {
        "id": 97,
        "nombre": "Nobol",
        "parroquias": [
          {
            "id": 604,
            "nombre": "Narcisa de Jesús"
          }
        ]
      },
      {
        "id": 87,
        "nombre": "Palestina",
        "parroquias": [
          {
            "id": 573,
            "nombre": "Palestina"
          }
        ]
      },
      {
        "id": 88,
        "nombre": "Pedro Carbo",
        "parroquias": [
          {
            "id": 574,
            "nombre": "Pedro Carbo"
          },
          {
            "id": 576,
            "nombre": "Sabanilla"
          },
          {
            "id": 575,
            "nombre": "Valle de La Virgen"
          }
        ]
      },
      {
        "id": 93,
        "nombre": "Playas",
        "parroquias": [
          {
            "id": 598,
            "nombre": "General Villamil (Playas)"
          }
        ]
      },
      {
        "id": 91,
        "nombre": "Salitre (Urbina Jado)",
        "parroquias": [
          {
            "id": 582,
            "nombre": "Bocana"
          },
          {
            "id": 583,
            "nombre": "Candilejos"
          },
          {
            "id": 584,
            "nombre": "Central"
          },
          {
            "id": 587,
            "nombre": "El Salitre (Las Ramas)"
          },
          {
            "id": 588,
            "nombre": "Gral. Vernaza (Dos Esteros)"
          },
          {
            "id": 590,
            "nombre": "Junquillal"
          },
          {
            "id": 589,
            "nombre": "La Victoria (Ñauza)"
          },
          {
            "id": 585,
            "nombre": "Paraíso"
          },
          {
            "id": 586,
            "nombre": "San Mateo"
          }
        ]
      },
      {
        "id": 89,
        "nombre": "Samborondón",
        "parroquias": [
          {
            "id": 578,
            "nombre": "La Puntilla (Satélite)"
          },
          {
            "id": 577,
            "nombre": "Samborondón"
          },
          {
            "id": 579,
            "nombre": "Samborondón"
          },
          {
            "id": 580,
            "nombre": "Tarifa"
          }
        ]
      },
      {
        "id": 92,
        "nombre": "San Jacinto de Yaguachi",
        "parroquias": [
          {
            "id": 592,
            "nombre": "Crnel. Lorenzo de Garaicoa (Pedregal)"
          },
          {
            "id": 593,
            "nombre": "Crnel. Marcelino Maridueña (San Carlos)"
          },
          {
            "id": 594,
            "nombre": "Gral. Pedro J. Montero (Boliche)"
          },
          {
            "id": 591,
            "nombre": "San Jacinto de Yaguachi"
          },
          {
            "id": 595,
            "nombre": "Simón Bolívar"
          },
          {
            "id": 597,
            "nombre": "Virgen de Fátima"
          },
          {
            "id": 596,
            "nombre": "Yaguachi Viejo (Cone)"
          }
        ]
      },
      {
        "id": 90,
        "nombre": "Santa Lucía",
        "parroquias": [
          {
            "id": 581,
            "nombre": "Santa Lucía"
          }
        ]
      },
      {
        "id": 94,
        "nombre": "Simón Bolívar",
        "parroquias": [
          {
            "id": 600,
            "nombre": "Crnel.Lorenzo de Garaicoa (Pedregal)"
          },
          {
            "id": 599,
            "nombre": "Simón Bolívar"
          }
        ]
      }
    ]
  },
  {
    "id": 10,
    "nombre": "Imbabura",
    "cantones": [
      {
        "id": 101,
        "nombre": "Antonio Ante",
        "parroquias": [
          {
            "id": 620,
            "nombre": "Andrade Marín (Lourdes)"
          },
          {
            "id": 621,
            "nombre": "Atuntaqui"
          },
          {
            "id": 622,
            "nombre": "Atuntaqui"
          },
          {
            "id": 623,
            "nombre": "Imbaya (San Luis de Cobuendo)"
          },
          {
            "id": 624,
            "nombre": "San Francisco de Natabuela"
          },
          {
            "id": 625,
            "nombre": "San José de Chaltura"
          },
          {
            "id": 626,
            "nombre": "San Roque"
          }
        ]
      },
      {
        "id": 102,
        "nombre": "Cotacachi",
        "parroquias": [
          {
            "id": 636,
            "nombre": "6 de Julio de Cuellaje (Cab. En Cuellaje)"
          },
          {
            "id": 630,
            "nombre": "Apuela"
          },
          {
            "id": 629,
            "nombre": "Cotacachi"
          },
          {
            "id": 631,
            "nombre": "García Moreno (Llurimagua)"
          },
          {
            "id": 632,
            "nombre": "Imantag"
          },
          {
            "id": 633,
            "nombre": "Peñaherrera"
          },
          {
            "id": 634,
            "nombre": "Plaza Gutiérrez (Calvario)"
          },
          {
            "id": 635,
            "nombre": "Quiroga"
          },
          {
            "id": 627,
            "nombre": "Sagrario"
          },
          {
            "id": 628,
            "nombre": "San Francisco"
          },
          {
            "id": 637,
            "nombre": "Vacas Galindo (El Churo) (Cab.En San Miguel Alto"
          }
        ]
      },
      {
        "id": 100,
        "nombre": "Ibarra",
        "parroquias": [
          {
            "id": 613,
            "nombre": "Ambuquí"
          },
          {
            "id": 614,
            "nombre": "Angochagua"
          },
          {
            "id": 607,
            "nombre": "Caranqui"
          },
          {
            "id": 615,
            "nombre": "Carolina"
          },
          {
            "id": 608,
            "nombre": "Guayaquil de Alpachaca"
          },
          {
            "id": 611,
            "nombre": "La Dolorosa del Priorato"
          },
          {
            "id": 616,
            "nombre": "La Esperanza"
          },
          {
            "id": 617,
            "nombre": "Lita"
          },
          {
            "id": 609,
            "nombre": "Sagrario"
          },
          {
            "id": 618,
            "nombre": "Salinas"
          },
          {
            "id": 619,
            "nombre": "San Antonio"
          },
          {
            "id": 610,
            "nombre": "San Francisco"
          },
          {
            "id": 612,
            "nombre": "San Miguel de Ibarra"
          }
        ]
      },
      {
        "id": 103,
        "nombre": "Otavalo",
        "parroquias": [
          {
            "id": 641,
            "nombre": "Dr. Miguel Egas Cabezas (Peguche)"
          },
          {
            "id": 642,
            "nombre": "Eugenio Espejo (Calpaquí)"
          },
          {
            "id": 643,
            "nombre": "González Suárez"
          },
          {
            "id": 638,
            "nombre": "Jordán"
          },
          {
            "id": 640,
            "nombre": "Otavalo"
          },
          {
            "id": 644,
            "nombre": "Pataquí"
          },
          {
            "id": 645,
            "nombre": "San José de Quichinche"
          },
          {
            "id": 646,
            "nombre": "San Juan de Ilumán"
          },
          {
            "id": 639,
            "nombre": "San Luis"
          },
          {
            "id": 647,
            "nombre": "San Pablo"
          },
          {
            "id": 648,
            "nombre": "San Rafael"
          },
          {
            "id": 649,
            "nombre": "Selva Alegre (Cab.En San Miguel de Pamplona)"
          }
        ]
      },
      {
        "id": 104,
        "nombre": "Pimampiro",
        "parroquias": [
          {
            "id": 651,
            "nombre": "Chugá"
          },
          {
            "id": 652,
            "nombre": "Mariano Acosta"
          },
          {
            "id": 650,
            "nombre": "Pimampiro"
          },
          {
            "id": 653,
            "nombre": "San Francisco de Sigsipamba"
          }
        ]
      },
      {
        "id": 105,
        "nombre": "San Miguel de Urcuquí",
        "parroquias": [
          {
            "id": 655,
            "nombre": "Cahuasquí"
          },
          {
            "id": 656,
            "nombre": "La Merced de Buenos Aires"
          },
          {
            "id": 657,
            "nombre": "Pablo Arenas"
          },
          {
            "id": 658,
            "nombre": "San Blas"
          },
          {
            "id": 659,
            "nombre": "Tumbabiro"
          },
          {
            "id": 654,
            "nombre": "Urcuquí Cabecera Cantonal"
          }
        ]
      }
    ]
  },
  {
    "id": 11,
    "nombre": "Loja",
    "cantones": [
      {
        "id": 107,
        "nombre": "Calvas",
        "parroquias": [
          {
            "id": 678,
            "nombre": "Cariamanga"
          },
          {
            "id": 681,
            "nombre": "Cariamanga"
          },
          {
            "id": 679,
            "nombre": "Chile"
          },
          {
            "id": 682,
            "nombre": "Colaisaca"
          },
          {
            "id": 683,
            "nombre": "El Lucero"
          },
          {
            "id": 680,
            "nombre": "San Vicente"
          },
          {
            "id": 685,
            "nombre": "Sanguillín"
          },
          {
            "id": 684,
            "nombre": "Utuana"
          }
        ]
      },
      {
        "id": 108,
        "nombre": "Catamayo",
        "parroquias": [
          {
            "id": 686,
            "nombre": "Catamayo"
          },
          {
            "id": 688,
            "nombre": "Catamayo (La Toma)"
          },
          {
            "id": 689,
            "nombre": "El Tambo"
          },
          {
            "id": 690,
            "nombre": "Guayquichuma"
          },
          {
            "id": 687,
            "nombre": "San José"
          },
          {
            "id": 691,
            "nombre": "San Pedro de La Bendita"
          },
          {
            "id": 692,
            "nombre": "Zambi"
          }
        ]
      },
      {
        "id": 109,
        "nombre": "Celica",
        "parroquias": [
          {
            "id": 696,
            "nombre": "12 de Diciembre (Cab. En Achiotes)"
          },
          {
            "id": 693,
            "nombre": "Celica"
          },
          {
            "id": 695,
            "nombre": "Chaquinal"
          },
          {
            "id": 694,
            "nombre": "Cruzpamba (Cab. En Carlos Bustamante)"
          },
          {
            "id": 697,
            "nombre": "Pindal (Federico Páez)"
          },
          {
            "id": 698,
            "nombre": "Pozul (San Juan de Pozul)"
          },
          {
            "id": 699,
            "nombre": "Sabanilla"
          },
          {
            "id": 700,
            "nombre": "Tnte. Maximiliano Rodríguez Loaiza"
          }
        ]
      },
      {
        "id": 110,
        "nombre": "Chaguarpamba",
        "parroquias": [
          {
            "id": 705,
            "nombre": "Amarillos"
          },
          {
            "id": 702,
            "nombre": "Buenavista"
          },
          {
            "id": 701,
            "nombre": "Chaguarpamba"
          },
          {
            "id": 703,
            "nombre": "El Rosario"
          },
          {
            "id": 704,
            "nombre": "Santa Rufina"
          }
        ]
      },
      {
        "id": 111,
        "nombre": "Espíndola",
        "parroquias": [
          {
            "id": 710,
            "nombre": "27 de Abril (Cab. En La Naranja)"
          },
          {
            "id": 706,
            "nombre": "Amaluza"
          },
          {
            "id": 707,
            "nombre": "Bellavista"
          },
          {
            "id": 712,
            "nombre": "El Airo"
          },
          {
            "id": 711,
            "nombre": "El Ingenio"
          },
          {
            "id": 708,
            "nombre": "Jimbura"
          },
          {
            "id": 709,
            "nombre": "Santa Teresita"
          }
        ]
      },
      {
        "id": 112,
        "nombre": "Gonzanamá",
        "parroquias": [
          {
            "id": 714,
            "nombre": "Changaimina (La Libertad)"
          },
          {
            "id": 715,
            "nombre": "Fundochamba"
          },
          {
            "id": 713,
            "nombre": "Gonzanamá"
          },
          {
            "id": 716,
            "nombre": "Nambacola"
          },
          {
            "id": 717,
            "nombre": "Purunuma (Eguiguren)"
          },
          {
            "id": 718,
            "nombre": "Quilanga (La Paz)"
          },
          {
            "id": 719,
            "nombre": "Sacapalca"
          },
          {
            "id": 720,
            "nombre": "San Antonio de Las Aradas (Cab. En Las Aradas)"
          }
        ]
      },
      {
        "id": 106,
        "nombre": "Loja",
        "parroquias": [
          {
            "id": 665,
            "nombre": "Chantaco"
          },
          {
            "id": 666,
            "nombre": "Chuquiribamba"
          },
          {
            "id": 667,
            "nombre": "El Cisne"
          },
          {
            "id": 660,
            "nombre": "El Sagrario"
          },
          {
            "id": 668,
            "nombre": "Gualel"
          },
          {
            "id": 669,
            "nombre": "Jimbilla"
          },
          {
            "id": 664,
            "nombre": "Loja"
          },
          {
            "id": 670,
            "nombre": "Malacatos (Valladolid)"
          },
          {
            "id": 677,
            "nombre": "Quinara"
          },
          {
            "id": 671,
            "nombre": "San Lucas"
          },
          {
            "id": 672,
            "nombre": "San Pedro de Vilcabamba"
          },
          {
            "id": 661,
            "nombre": "San Sebastián"
          },
          {
            "id": 673,
            "nombre": "Santiago"
          },
          {
            "id": 662,
            "nombre": "Sucre"
          },
          {
            "id": 674,
            "nombre": "Taquil (Miguel Riofrío)"
          },
          {
            "id": 663,
            "nombre": "Valle"
          },
          {
            "id": 675,
            "nombre": "Vilcabamba (Victoria)"
          },
          {
            "id": 676,
            "nombre": "Yangana (Arsenio Castillo)"
          }
        ]
      },
      {
        "id": 113,
        "nombre": "Macará",
        "parroquias": [
          {
            "id": 721,
            "nombre": "General Eloy Alfaro (San Sebastián)"
          },
          {
            "id": 725,
            "nombre": "La Victoria"
          },
          {
            "id": 724,
            "nombre": "Larama"
          },
          {
            "id": 723,
            "nombre": "Macará"
          },
          {
            "id": 722,
            "nombre": "Macará (Manuel Enrique Rengel Suquilanda)"
          },
          {
            "id": 726,
            "nombre": "Sabiango (La Capilla)"
          }
        ]
      },
      {
        "id": 121,
        "nombre": "Olmedo",
        "parroquias": [
          {
            "id": 773,
            "nombre": "La Tingue"
          },
          {
            "id": 772,
            "nombre": "Olmedo"
          }
        ]
      },
      {
        "id": 114,
        "nombre": "Paltas",
        "parroquias": [
          {
            "id": 730,
            "nombre": "Cangonamá"
          },
          {
            "id": 737,
            "nombre": "Casanga"
          },
          {
            "id": 727,
            "nombre": "Catacocha"
          },
          {
            "id": 729,
            "nombre": "Catacocha"
          },
          {
            "id": 731,
            "nombre": "Guachanamá"
          },
          {
            "id": 732,
            "nombre": "La Tingue"
          },
          {
            "id": 733,
            "nombre": "Lauro Guerrero"
          },
          {
            "id": 728,
            "nombre": "Lourdes"
          },
          {
            "id": 734,
            "nombre": "Olmedo (Santa Bárbara)"
          },
          {
            "id": 735,
            "nombre": "Orianga"
          },
          {
            "id": 736,
            "nombre": "San Antonio"
          },
          {
            "id": 738,
            "nombre": "Yamana"
          }
        ]
      },
      {
        "id": 119,
        "nombre": "Pindal",
        "parroquias": [
          {
            "id": 767,
            "nombre": "12 de Diciembre (Cab.En Achiotes)"
          },
          {
            "id": 766,
            "nombre": "Chaquinal"
          },
          {
            "id": 768,
            "nombre": "Milagros"
          },
          {
            "id": 765,
            "nombre": "Pindal"
          }
        ]
      },
      {
        "id": 115,
        "nombre": "Puyango",
        "parroquias": [
          {
            "id": 739,
            "nombre": "Alamor"
          },
          {
            "id": 740,
            "nombre": "Ciano"
          },
          {
            "id": 741,
            "nombre": "El Arenal"
          },
          {
            "id": 742,
            "nombre": "El Limo (Mariana de Jesús)"
          },
          {
            "id": 743,
            "nombre": "Mercadillo"
          },
          {
            "id": 744,
            "nombre": "Vicentino"
          }
        ]
      },
      {
        "id": 120,
        "nombre": "Quilanga",
        "parroquias": [
          {
            "id": 770,
            "nombre": "Fundochamba"
          },
          {
            "id": 769,
            "nombre": "Quilanga"
          },
          {
            "id": 771,
            "nombre": "San Antonio de Las Aradas (Cab. En Las Aradas)"
          }
        ]
      },
      {
        "id": 116,
        "nombre": "Saraguro",
        "parroquias": [
          {
            "id": 746,
            "nombre": "El Paraíso de Celén"
          },
          {
            "id": 747,
            "nombre": "El Tablón"
          },
          {
            "id": 748,
            "nombre": "Lluzhapa"
          },
          {
            "id": 749,
            "nombre": "Manú"
          },
          {
            "id": 750,
            "nombre": "San Antonio de Qumbe (Cumbe)"
          },
          {
            "id": 751,
            "nombre": "San Pablo de Tenta"
          },
          {
            "id": 752,
            "nombre": "San Sebastián de Yúluc"
          },
          {
            "id": 745,
            "nombre": "Saraguro"
          },
          {
            "id": 753,
            "nombre": "Selva Alegre"
          },
          {
            "id": 755,
            "nombre": "Sumaypamba"
          },
          {
            "id": 754,
            "nombre": "Urdaneta (Paquishapa)"
          }
        ]
      },
      {
        "id": 117,
        "nombre": "Sozoranga",
        "parroquias": [
          {
            "id": 757,
            "nombre": "Nueva Fátima"
          },
          {
            "id": 756,
            "nombre": "Sozoranga"
          },
          {
            "id": 758,
            "nombre": "Tacamoros"
          }
        ]
      },
      {
        "id": 118,
        "nombre": "Zapotillo",
        "parroquias": [
          {
            "id": 764,
            "nombre": "Bolaspamba"
          },
          {
            "id": 761,
            "nombre": "Garzareal"
          },
          {
            "id": 762,
            "nombre": "Limones"
          },
          {
            "id": 760,
            "nombre": "Mangahurco (Cazaderos)"
          },
          {
            "id": 763,
            "nombre": "Paletillas"
          },
          {
            "id": 759,
            "nombre": "Zapotillo"
          }
        ]
      }
    ]
  },
  {
    "id": 12,
    "nombre": "Los Rios",
    "cantones": [
      {
        "id": 123,
        "nombre": "Baba",
        "parroquias": [
          {
            "id": 784,
            "nombre": "Baba"
          },
          {
            "id": 785,
            "nombre": "Guare"
          },
          {
            "id": 786,
            "nombre": "Isla de Bejucal"
          }
        ]
      },
      {
        "id": 122,
        "nombre": "Babahoyo",
        "parroquias": [
          {
            "id": 778,
            "nombre": "Babahoyo"
          },
          {
            "id": 776,
            "nombre": "Barreiro"
          },
          {
            "id": 779,
            "nombre": "Barreiro (Santa Rita)"
          },
          {
            "id": 780,
            "nombre": "Caracol"
          },
          {
            "id": 774,
            "nombre": "Clemente Baquerizo"
          },
          {
            "id": 775,
            "nombre": "Dr. Camilo Ponce"
          },
          {
            "id": 777,
            "nombre": "El Salto"
          },
          {
            "id": 781,
            "nombre": "Febres Cordero (Las Juntas)"
          },
          {
            "id": 783,
            "nombre": "La Unión"
          },
          {
            "id": 782,
            "nombre": "Pimocha"
          }
        ]
      },
      {
        "id": 131,
        "nombre": "Buena Fé",
        "parroquias": [
          {
            "id": 821,
            "nombre": "11 de Octubre"
          },
          {
            "id": 820,
            "nombre": "7 de Agosto"
          },
          {
            "id": 823,
            "nombre": "Patricia Pilar"
          },
          {
            "id": 819,
            "nombre": "San Jacinto de Buena Fé"
          },
          {
            "id": 822,
            "nombre": "San Jacinto de Buena Fé"
          }
        ]
      },
      {
        "id": 133,
        "nombre": "Mocache",
        "parroquias": [
          {
            "id": 825,
            "nombre": "Mocache"
          }
        ]
      },
      {
        "id": 124,
        "nombre": "Montalvo",
        "parroquias": [
          {
            "id": 787,
            "nombre": "Montalvo"
          }
        ]
      },
      {
        "id": 130,
        "nombre": "Palenque",
        "parroquias": [
          {
            "id": 818,
            "nombre": "Palenque"
          }
        ]
      },
      {
        "id": 125,
        "nombre": "Puebloviejo",
        "parroquias": [
          {
            "id": 788,
            "nombre": "Puebloviejo"
          },
          {
            "id": 789,
            "nombre": "Puerto Pechiche"
          },
          {
            "id": 790,
            "nombre": "San Juan"
          }
        ]
      },
      {
        "id": 126,
        "nombre": "Quevedo",
        "parroquias": [
          {
            "id": 798,
            "nombre": "24 de Mayo"
          },
          {
            "id": 802,
            "nombre": "Buena Fé"
          },
          {
            "id": 794,
            "nombre": "Guayacán"
          },
          {
            "id": 806,
            "nombre": "La Esperanza"
          },
          {
            "id": 803,
            "nombre": "Mocache"
          },
          {
            "id": 795,
            "nombre": "Nicolás Infante Díaz"
          },
          {
            "id": 791,
            "nombre": "Quevedo"
          },
          {
            "id": 801,
            "nombre": "Quevedo"
          },
          {
            "id": 792,
            "nombre": "San Camilo"
          },
          {
            "id": 804,
            "nombre": "San Carlos"
          },
          {
            "id": 796,
            "nombre": "San Cristóbal"
          },
          {
            "id": 793,
            "nombre": "San José"
          },
          {
            "id": 797,
            "nombre": "Siete de Octubre"
          },
          {
            "id": 805,
            "nombre": "Valencia"
          },
          {
            "id": 799,
            "nombre": "Venus del Río Quevedo"
          },
          {
            "id": 800,
            "nombre": "Viva Alfaro"
          }
        ]
      },
      {
        "id": 134,
        "nombre": "Quinsaloma",
        "parroquias": [
          {
            "id": 826,
            "nombre": "Quinsaloma"
          }
        ]
      },
      {
        "id": 127,
        "nombre": "Urdaneta",
        "parroquias": [
          {
            "id": 807,
            "nombre": "Catarama"
          },
          {
            "id": 808,
            "nombre": "Ricaurte"
          }
        ]
      },
      {
        "id": 132,
        "nombre": "Valencia",
        "parroquias": [
          {
            "id": 824,
            "nombre": "Valencia"
          }
        ]
      },
      {
        "id": 128,
        "nombre": "Ventanas",
        "parroquias": [
          {
            "id": 809,
            "nombre": "10 de Noviembre"
          },
          {
            "id": 813,
            "nombre": "Chacarita"
          },
          {
            "id": 814,
            "nombre": "Los Ángeles"
          },
          {
            "id": 811,
            "nombre": "Quinsaloma"
          },
          {
            "id": 810,
            "nombre": "Ventanas"
          },
          {
            "id": 812,
            "nombre": "Zapotal"
          }
        ]
      },
      {
        "id": 129,
        "nombre": "Vínces",
        "parroquias": [
          {
            "id": 816,
            "nombre": "Antonio Sotomayor (Cab. En Playas de Vinces)"
          },
          {
            "id": 817,
            "nombre": "Palenque"
          },
          {
            "id": 815,
            "nombre": "Vinces"
          }
        ]
      }
    ]
  },
  {
    "id": 13,
    "nombre": "Manabi",
    "cantones": [
      {
        "id": 150,
        "nombre": "24 de Mayo",
        "parroquias": [
          {
            "id": 929,
            "nombre": "Arq. Sixto Durán Ballén"
          },
          {
            "id": 927,
            "nombre": "Bellavista"
          },
          {
            "id": 928,
            "nombre": "Noboa"
          },
          {
            "id": 926,
            "nombre": "Sucre"
          }
        ]
      },
      {
        "id": 136,
        "nombre": "Bolívar",
        "parroquias": [
          {
            "id": 844,
            "nombre": "Calceta"
          },
          {
            "id": 845,
            "nombre": "Membrillo"
          },
          {
            "id": 846,
            "nombre": "Quiroga"
          }
        ]
      },
      {
        "id": 137,
        "nombre": "Chone",
        "parroquias": [
          {
            "id": 850,
            "nombre": "Boyacá"
          },
          {
            "id": 851,
            "nombre": "Canuto"
          },
          {
            "id": 853,
            "nombre": "Chibunga"
          },
          {
            "id": 847,
            "nombre": "Chone"
          },
          {
            "id": 849,
            "nombre": "Chone"
          },
          {
            "id": 852,
            "nombre": "Convento"
          },
          {
            "id": 854,
            "nombre": "Eloy Alfaro"
          },
          {
            "id": 855,
            "nombre": "Ricaurte"
          },
          {
            "id": 856,
            "nombre": "San Antonio"
          },
          {
            "id": 848,
            "nombre": "Santa Rita"
          }
        ]
      },
      {
        "id": 138,
        "nombre": "El Carmen",
        "parroquias": [
          {
            "id": 858,
            "nombre": "4 de Diciembre"
          },
          {
            "id": 857,
            "nombre": "El Carmen"
          },
          {
            "id": 859,
            "nombre": "El Carmen"
          },
          {
            "id": 861,
            "nombre": "San Pedro de Suma"
          },
          {
            "id": 860,
            "nombre": "Wilfrido Loor Moreira (Maicito)"
          }
        ]
      },
      {
        "id": 139,
        "nombre": "Flavio Alfaro",
        "parroquias": [
          {
            "id": 862,
            "nombre": "Flavio Alfaro"
          },
          {
            "id": 863,
            "nombre": "San Francisco de Novillo (Cab. En"
          },
          {
            "id": 864,
            "nombre": "Zapallo"
          }
        ]
      },
      {
        "id": 154,
        "nombre": "Jama",
        "parroquias": [
          {
            "id": 938,
            "nombre": "Jama"
          }
        ]
      },
      {
        "id": 155,
        "nombre": "Jaramijó",
        "parroquias": [
          {
            "id": 939,
            "nombre": "Jaramijó"
          }
        ]
      },
      {
        "id": 140,
        "nombre": "Jipijapa",
        "parroquias": [
          {
            "id": 869,
            "nombre": "América"
          },
          {
            "id": 865,
            "nombre": "Dr. Miguel Morán Lucio"
          },
          {
            "id": 870,
            "nombre": "El Anegado (Cab. En Eloy Alfaro)"
          },
          {
            "id": 868,
            "nombre": "Jipijapa"
          },
          {
            "id": 871,
            "nombre": "Julcuy"
          },
          {
            "id": 872,
            "nombre": "La Unión"
          },
          {
            "id": 873,
            "nombre": "Machalilla"
          },
          {
            "id": 866,
            "nombre": "Manuel Inocencio Parrales Y Guale"
          },
          {
            "id": 874,
            "nombre": "Membrillal"
          },
          {
            "id": 875,
            "nombre": "Pedro Pablo Gómez"
          },
          {
            "id": 877,
            "nombre": "Puerto López"
          },
          {
            "id": 876,
            "nombre": "Puerto de Cayo"
          },
          {
            "id": 867,
            "nombre": "San Lorenzo de Jipijapa"
          }
        ]
      },
      {
        "id": 141,
        "nombre": "Junín",
        "parroquias": [
          {
            "id": 878,
            "nombre": "Junín"
          }
        ]
      },
      {
        "id": 142,
        "nombre": "Manta",
        "parroquias": [
          {
            "id": 883,
            "nombre": "Eloy Alfaro"
          },
          {
            "id": 879,
            "nombre": "Los Esteros"
          },
          {
            "id": 880,
            "nombre": "Manta"
          },
          {
            "id": 884,
            "nombre": "Manta"
          },
          {
            "id": 885,
            "nombre": "San Lorenzo"
          },
          {
            "id": 881,
            "nombre": "San Mateo"
          },
          {
            "id": 886,
            "nombre": "Santa Marianita (Boca de Pacoche)"
          },
          {
            "id": 882,
            "nombre": "Tarqui"
          }
        ]
      },
      {
        "id": 143,
        "nombre": "Montecristi",
        "parroquias": [
          {
            "id": 887,
            "nombre": "Anibal San Andrés"
          },
          {
            "id": 889,
            "nombre": "El Colorado"
          },
          {
            "id": 890,
            "nombre": "General Eloy Alfaro"
          },
          {
            "id": 893,
            "nombre": "Jaramijó"
          },
          {
            "id": 894,
            "nombre": "La Pila"
          },
          {
            "id": 891,
            "nombre": "Leonidas Proaño"
          },
          {
            "id": 888,
            "nombre": "Montecristi"
          },
          {
            "id": 892,
            "nombre": "Montecristi"
          }
        ]
      },
      {
        "id": 152,
        "nombre": "Olmedo",
        "parroquias": [
          {
            "id": 934,
            "nombre": "Olmedo"
          }
        ]
      },
      {
        "id": 144,
        "nombre": "Paján",
        "parroquias": [
          {
            "id": 896,
            "nombre": "Campozano (La Palma de Paján)"
          },
          {
            "id": 897,
            "nombre": "Cascol"
          },
          {
            "id": 898,
            "nombre": "Guale"
          },
          {
            "id": 899,
            "nombre": "Lascano"
          },
          {
            "id": 895,
            "nombre": "Paján"
          }
        ]
      },
      {
        "id": 151,
        "nombre": "Pedernales",
        "parroquias": [
          {
            "id": 932,
            "nombre": "10 de Agosto"
          },
          {
            "id": 933,
            "nombre": "Atahualpa"
          },
          {
            "id": 931,
            "nombre": "Cojimíes"
          },
          {
            "id": 930,
            "nombre": "Pedernales"
          }
        ]
      },
      {
        "id": 145,
        "nombre": "Pichincha",
        "parroquias": [
          {
            "id": 901,
            "nombre": "Barraganete"
          },
          {
            "id": 900,
            "nombre": "Pichincha"
          },
          {
            "id": 902,
            "nombre": "San Sebastián"
          }
        ]
      },
      {
        "id": 135,
        "nombre": "Portoviejo",
        "parroquias": [
          {
            "id": 828,
            "nombre": "12 de Marzo"
          },
          {
            "id": 834,
            "nombre": "18 de Octubre"
          },
          {
            "id": 837,
            "nombre": "Abdón Calderón (San Francisco)"
          },
          {
            "id": 838,
            "nombre": "Alhajuela (Bajo Grande)"
          },
          {
            "id": 832,
            "nombre": "Andrés de Vera"
          },
          {
            "id": 843,
            "nombre": "Chirijos"
          },
          {
            "id": 829,
            "nombre": "Colón"
          },
          {
            "id": 839,
            "nombre": "Crucita"
          },
          {
            "id": 833,
            "nombre": "Francisco Pacheco"
          },
          {
            "id": 830,
            "nombre": "Picoazá"
          },
          {
            "id": 827,
            "nombre": "Portoviejo"
          },
          {
            "id": 836,
            "nombre": "Portoviejo"
          },
          {
            "id": 840,
            "nombre": "Pueblo Nuevo"
          },
          {
            "id": 841,
            "nombre": "Riochico (Río Chico)"
          },
          {
            "id": 831,
            "nombre": "San Pablo"
          },
          {
            "id": 842,
            "nombre": "San Plácido"
          },
          {
            "id": 835,
            "nombre": "Simón Bolívar"
          }
        ]
      },
      {
        "id": 153,
        "nombre": "Puerto López",
        "parroquias": [
          {
            "id": 936,
            "nombre": "Machalilla"
          },
          {
            "id": 935,
            "nombre": "Puerto López"
          },
          {
            "id": 937,
            "nombre": "Salango"
          }
        ]
      },
      {
        "id": 146,
        "nombre": "Rocafuerte",
        "parroquias": [
          {
            "id": 903,
            "nombre": "Rocafuerte"
          }
        ]
      },
      {
        "id": 156,
        "nombre": "San Vicente",
        "parroquias": [
          {
            "id": 941,
            "nombre": "Canoa"
          },
          {
            "id": 940,
            "nombre": "San Vicente"
          }
        ]
      },
      {
        "id": 147,
        "nombre": "Santa Ana",
        "parroquias": [
          {
            "id": 907,
            "nombre": "Ayacucho"
          },
          {
            "id": 908,
            "nombre": "Honorato Vásquez (Cab. En Vásquez)"
          },
          {
            "id": 909,
            "nombre": "La Unión"
          },
          {
            "id": 905,
            "nombre": "Lodana"
          },
          {
            "id": 910,
            "nombre": "Olmedo"
          },
          {
            "id": 911,
            "nombre": "San Pablo (Cab. En Pueblo Nuevo)"
          },
          {
            "id": 904,
            "nombre": "Santa Ana"
          },
          {
            "id": 906,
            "nombre": "Santa Ana de Vuelta Larga"
          }
        ]
      },
      {
        "id": 148,
        "nombre": "Sucre",
        "parroquias": [
          {
            "id": 918,
            "nombre": "10 de Agosto"
          },
          {
            "id": 912,
            "nombre": "Bahía de Caráquez"
          },
          {
            "id": 914,
            "nombre": "Bahía de Caráquez"
          },
          {
            "id": 915,
            "nombre": "Canoa"
          },
          {
            "id": 917,
            "nombre": "Charapotó"
          },
          {
            "id": 916,
            "nombre": "Cojimíes"
          },
          {
            "id": 919,
            "nombre": "Jama"
          },
          {
            "id": 913,
            "nombre": "Leonidas Plaza Gutiérrez"
          },
          {
            "id": 920,
            "nombre": "Pedernales"
          },
          {
            "id": 921,
            "nombre": "San Isidro"
          },
          {
            "id": 922,
            "nombre": "San Vicente"
          }
        ]
      },
      {
        "id": 149,
        "nombre": "Tosagua",
        "parroquias": [
          {
            "id": 925,
            "nombre": "Angel Pedro Giler (La Estancilla)"
          },
          {
            "id": 924,
            "nombre": "Bachillero"
          },
          {
            "id": 923,
            "nombre": "Tosagua"
          }
        ]
      }
    ]
  },
  {
    "id": 14,
    "nombre": "Morona Santiago",
    "cantones": [
      {
        "id": 158,
        "nombre": "Gualaquiza",
        "parroquias": [
          {
            "id": 960,
            "nombre": "Amazonas (Rosario de Cuyes)"
          },
          {
            "id": 961,
            "nombre": "Bermejos"
          },
          {
            "id": 962,
            "nombre": "Bomboiza"
          },
          {
            "id": 963,
            "nombre": "Chigüinda"
          },
          {
            "id": 967,
            "nombre": "El Ideal"
          },
          {
            "id": 964,
            "nombre": "El Rosario"
          },
          {
            "id": 957,
            "nombre": "Gualaquiza"
          },
          {
            "id": 959,
            "nombre": "Gualaquiza"
          },
          {
            "id": 958,
            "nombre": "Mercedes Molina"
          },
          {
            "id": 965,
            "nombre": "Nueva Tarqui"
          },
          {
            "id": 966,
            "nombre": "San Miguel de Cuyes"
          }
        ]
      },
      {
        "id": 163,
        "nombre": "Huamboya",
        "parroquias": [
          {
            "id": 997,
            "nombre": "Chiguaza"
          },
          {
            "id": 996,
            "nombre": "Huamboya"
          },
          {
            "id": 998,
            "nombre": "Pablo Sexto"
          }
        ]
      },
      {
        "id": 159,
        "nombre": "Limón Indanza",
        "parroquias": [
          {
            "id": 968,
            "nombre": "General Leonidas Plaza Gutiérrez (Limón)"
          },
          {
            "id": 969,
            "nombre": "Indanza"
          },
          {
            "id": 970,
            "nombre": "Pan de Azúcar"
          },
          {
            "id": 971,
            "nombre": "San Antonio (Cab. En San Antonio Centro"
          },
          {
            "id": 972,
            "nombre": "San Carlos de Limón (San Carlos del"
          },
          {
            "id": 973,
            "nombre": "San Juan Bosco"
          },
          {
            "id": 974,
            "nombre": "San Miguel de Conchay"
          },
          {
            "id": 975,
            "nombre": "Santa Susana de Chiviaza (Cab. En Chiviaza)"
          },
          {
            "id": 976,
            "nombre": "Yunganza (Cab. En El Rosario)"
          }
        ]
      },
      {
        "id": 166,
        "nombre": "Logroño",
        "parroquias": [
          {
            "id": 1009,
            "nombre": "Logroño"
          },
          {
            "id": 1011,
            "nombre": "Shimpis"
          },
          {
            "id": 1010,
            "nombre": "Yaupi"
          }
        ]
      },
      {
        "id": 157,
        "nombre": "Morona",
        "parroquias": [
          {
            "id": 943,
            "nombre": "Alshi (Cab. En 9 de Octubre)"
          },
          {
            "id": 944,
            "nombre": "Chiguaza"
          },
          {
            "id": 954,
            "nombre": "Cuchaentza"
          },
          {
            "id": 945,
            "nombre": "General Proaño"
          },
          {
            "id": 946,
            "nombre": "Huasaga (Cab.En Wampuik)"
          },
          {
            "id": 942,
            "nombre": "Macas"
          },
          {
            "id": 947,
            "nombre": "Macuma"
          },
          {
            "id": 956,
            "nombre": "Río Blanco"
          },
          {
            "id": 948,
            "nombre": "San Isidro"
          },
          {
            "id": 955,
            "nombre": "San José de Morona"
          },
          {
            "id": 949,
            "nombre": "Sevilla Don Bosco"
          },
          {
            "id": 950,
            "nombre": "Sinaí"
          },
          {
            "id": 951,
            "nombre": "Taisha"
          },
          {
            "id": 953,
            "nombre": "Tuutinentza"
          },
          {
            "id": 952,
            "nombre": "Zuña (Zúñac)"
          }
        ]
      },
      {
        "id": 167,
        "nombre": "Pablo Sexto",
        "parroquias": [
          {
            "id": 1012,
            "nombre": "Pablo Sexto"
          }
        ]
      },
      {
        "id": 160,
        "nombre": "Palora",
        "parroquias": [
          {
            "id": 978,
            "nombre": "Arapicos"
          },
          {
            "id": 979,
            "nombre": "Cumandá (Cab. En Colonia Agrícola Sevilla del Oro)"
          },
          {
            "id": 980,
            "nombre": "Huamboya"
          },
          {
            "id": 977,
            "nombre": "Palora (Metzera)"
          },
          {
            "id": 981,
            "nombre": "Sangay (Cab. En Nayamanaca)"
          }
        ]
      },
      {
        "id": 164,
        "nombre": "San Juan Bosco",
        "parroquias": [
          {
            "id": 1000,
            "nombre": "Pan de Azúcar"
          },
          {
            "id": 1001,
            "nombre": "San Carlos de Limón"
          },
          {
            "id": 1002,
            "nombre": "San Jacinto de Wakambeis"
          },
          {
            "id": 999,
            "nombre": "San Juan Bosco"
          },
          {
            "id": 1003,
            "nombre": "Santiago de Pananza"
          }
        ]
      },
      {
        "id": 161,
        "nombre": "Santiago",
        "parroquias": [
          {
            "id": 984,
            "nombre": "Chupianza"
          },
          {
            "id": 983,
            "nombre": "Copal"
          },
          {
            "id": 985,
            "nombre": "Patuca"
          },
          {
            "id": 989,
            "nombre": "San Francisco de Chinimbimi"
          },
          {
            "id": 986,
            "nombre": "San Luis de El Acho (Cab. En El Acho)"
          },
          {
            "id": 987,
            "nombre": "Santiago"
          },
          {
            "id": 982,
            "nombre": "Santiago de Méndez"
          },
          {
            "id": 988,
            "nombre": "Tayuza"
          }
        ]
      },
      {
        "id": 162,
        "nombre": "Sucúa",
        "parroquias": [
          {
            "id": 991,
            "nombre": "Asunción"
          },
          {
            "id": 992,
            "nombre": "Huambi"
          },
          {
            "id": 993,
            "nombre": "Logroño"
          },
          {
            "id": 995,
            "nombre": "Santa Marianita de Jesús"
          },
          {
            "id": 990,
            "nombre": "Sucúa"
          },
          {
            "id": 994,
            "nombre": "Yaupi"
          }
        ]
      },
      {
        "id": 165,
        "nombre": "Taisha",
        "parroquias": [
          {
            "id": 1005,
            "nombre": "Huasaga (Cab. En Wampuik)"
          },
          {
            "id": 1006,
            "nombre": "Macuma"
          },
          {
            "id": 1008,
            "nombre": "Pumpuentsa"
          },
          {
            "id": 1004,
            "nombre": "Taisha"
          },
          {
            "id": 1007,
            "nombre": "Tuutinentza"
          }
        ]
      },
      {
        "id": 168,
        "nombre": "Tiwintza",
        "parroquias": [
          {
            "id": 1014,
            "nombre": "San José de Morona"
          },
          {
            "id": 1013,
            "nombre": "Santiago"
          }
        ]
      }
    ]
  },
  {
    "id": 15,
    "nombre": "Napo",
    "cantones": [
      {
        "id": 170,
        "nombre": "Archidona",
        "parroquias": [
          {
            "id": 1024,
            "nombre": "Archidona"
          },
          {
            "id": 1025,
            "nombre": "Avila"
          },
          {
            "id": 1026,
            "nombre": "Cotundo"
          },
          {
            "id": 1027,
            "nombre": "Loreto"
          },
          {
            "id": 1029,
            "nombre": "Puerto Murialdo"
          },
          {
            "id": 1028,
            "nombre": "San Pablo de Ushpayacu"
          }
        ]
      },
      {
        "id": 173,
        "nombre": "Carlos Julio Arosemena Tola",
        "parroquias": [
          {
            "id": 1043,
            "nombre": "Carlos Julio Arosemena Tola"
          }
        ]
      },
      {
        "id": 171,
        "nombre": "El Chaco",
        "parroquias": [
          {
            "id": 1030,
            "nombre": "El Chaco"
          },
          {
            "id": 1031,
            "nombre": "Gonzalo Díaz de Pineda (El Bombón)"
          },
          {
            "id": 1032,
            "nombre": "Linares"
          },
          {
            "id": 1033,
            "nombre": "Oyacachi"
          },
          {
            "id": 1034,
            "nombre": "Santa Rosa"
          },
          {
            "id": 1035,
            "nombre": "Sardinas"
          }
        ]
      },
      {
        "id": 172,
        "nombre": "Quijos",
        "parroquias": [
          {
            "id": 1036,
            "nombre": "Baeza"
          },
          {
            "id": 1037,
            "nombre": "Cosanga"
          },
          {
            "id": 1038,
            "nombre": "Cuyuja"
          },
          {
            "id": 1039,
            "nombre": "Papallacta"
          },
          {
            "id": 1040,
            "nombre": "San Francisco de Borja (Virgilio Dávila)"
          },
          {
            "id": 1041,
            "nombre": "San José del Payamino"
          },
          {
            "id": 1042,
            "nombre": "Sumaco"
          }
        ]
      },
      {
        "id": 169,
        "nombre": "Tena",
        "parroquias": [
          {
            "id": 1016,
            "nombre": "Ahuano"
          },
          {
            "id": 1017,
            "nombre": "Carlos Julio Arosemena Tola (Zatza-Yacu)"
          },
          {
            "id": 1018,
            "nombre": "Chontapunta"
          },
          {
            "id": 1019,
            "nombre": "Pano"
          },
          {
            "id": 1020,
            "nombre": "Puerto Misahualli"
          },
          {
            "id": 1021,
            "nombre": "Puerto Napo"
          },
          {
            "id": 1023,
            "nombre": "San Juan de Muyuna"
          },
          {
            "id": 1015,
            "nombre": "Tena"
          },
          {
            "id": 1022,
            "nombre": "Tálag"
          }
        ]
      }
    ]
  },
  {
    "id": 22,
    "nombre": "Orellana",
    "cantones": [
      {
        "id": 215,
        "nombre": "Aguarico",
        "parroquias": [
          {
            "id": 1345,
            "nombre": "Capitán Augusto Rivadeneyra"
          },
          {
            "id": 1346,
            "nombre": "Cononaco"
          },
          {
            "id": 1344,
            "nombre": "Nuevo Rocafuerte"
          },
          {
            "id": 1347,
            "nombre": "Santa María de Huiririma"
          },
          {
            "id": 1343,
            "nombre": "Tipitini"
          },
          {
            "id": 1348,
            "nombre": "Tiputini"
          },
          {
            "id": 1349,
            "nombre": "Yasuní"
          }
        ]
      },
      {
        "id": 216,
        "nombre": "La Joya de Los Sachas",
        "parroquias": [
          {
            "id": 1351,
            "nombre": "Enokanqui"
          },
          {
            "id": 1350,
            "nombre": "La Joya de Los Sachas"
          },
          {
            "id": 1355,
            "nombre": "Lago San Pedro"
          },
          {
            "id": 1352,
            "nombre": "Pompeya"
          },
          {
            "id": 1356,
            "nombre": "Rumipamba"
          },
          {
            "id": 1353,
            "nombre": "San Carlos"
          },
          {
            "id": 1354,
            "nombre": "San Sebastián del Coca"
          },
          {
            "id": 1357,
            "nombre": "Tres de Noviembre"
          },
          {
            "id": 1358,
            "nombre": "Unión Milagreña"
          }
        ]
      },
      {
        "id": 217,
        "nombre": "Loreto",
        "parroquias": [
          {
            "id": 1360,
            "nombre": "Avila (Cab. En Huiruno)"
          },
          {
            "id": 1359,
            "nombre": "Loreto"
          },
          {
            "id": 1361,
            "nombre": "Puerto Murialdo"
          },
          {
            "id": 1363,
            "nombre": "San José de Dahuano"
          },
          {
            "id": 1362,
            "nombre": "San José de Payamino"
          },
          {
            "id": 1364,
            "nombre": "San Vicente de Huaticocha"
          }
        ]
      },
      {
        "id": 214,
        "nombre": "Orellana",
        "parroquias": [
          {
            "id": 1334,
            "nombre": "Alejandro Labaka"
          },
          {
            "id": 1332,
            "nombre": "Dayuma"
          },
          {
            "id": 1335,
            "nombre": "El Dorado"
          },
          {
            "id": 1336,
            "nombre": "El Edén"
          },
          {
            "id": 1337,
            "nombre": "García Moreno"
          },
          {
            "id": 1338,
            "nombre": "Inés Arango (Cab. En Western)"
          },
          {
            "id": 1339,
            "nombre": "La Belleza"
          },
          {
            "id": 1340,
            "nombre": "Nuevo Paraíso (Cab. En Unión"
          },
          {
            "id": 1331,
            "nombre": "Puerto Francisco de Orellana (El Coca)"
          },
          {
            "id": 1341,
            "nombre": "San José de Guayusa"
          },
          {
            "id": 1342,
            "nombre": "San Luis de Armenia"
          },
          {
            "id": 1333,
            "nombre": "Taracoa (Nueva Esperanza: Yuca)"
          }
        ]
      }
    ]
  },
  {
    "id": 16,
    "nombre": "Pastaza",
    "cantones": [
      {
        "id": 177,
        "nombre": "Arajuno",
        "parroquias": [
          {
            "id": 1066,
            "nombre": "Arajuno"
          },
          {
            "id": 1067,
            "nombre": "Curaray"
          }
        ]
      },
      {
        "id": 175,
        "nombre": "Mera",
        "parroquias": [
          {
            "id": 1062,
            "nombre": "Madre Tierra"
          },
          {
            "id": 1061,
            "nombre": "Mera"
          },
          {
            "id": 1063,
            "nombre": "Shell"
          }
        ]
      },
      {
        "id": 174,
        "nombre": "Pastaza",
        "parroquias": [
          {
            "id": 1045,
            "nombre": "Arajuno"
          },
          {
            "id": 1046,
            "nombre": "Canelos"
          },
          {
            "id": 1047,
            "nombre": "Curaray"
          },
          {
            "id": 1048,
            "nombre": "Diez de Agosto"
          },
          {
            "id": 1060,
            "nombre": "El Triunfo"
          },
          {
            "id": 1049,
            "nombre": "Fátima"
          },
          {
            "id": 1050,
            "nombre": "Montalvo (Andoas)"
          },
          {
            "id": 1051,
            "nombre": "Pomona"
          },
          {
            "id": 1044,
            "nombre": "Puyo"
          },
          {
            "id": 1052,
            "nombre": "Río Corrientes"
          },
          {
            "id": 1053,
            "nombre": "Río Tigre"
          },
          {
            "id": 1054,
            "nombre": "Santa Clara"
          },
          {
            "id": 1055,
            "nombre": "Sarayacu"
          },
          {
            "id": 1056,
            "nombre": "Simón Bolívar (Cab. En Mushullacta)"
          },
          {
            "id": 1057,
            "nombre": "Tarqui"
          },
          {
            "id": 1058,
            "nombre": "Teniente Hugo Ortiz"
          },
          {
            "id": 1059,
            "nombre": "Veracruz (Indillama) (Cab. En Indillama)"
          }
        ]
      },
      {
        "id": 176,
        "nombre": "Santa Clara",
        "parroquias": [
          {
            "id": 1065,
            "nombre": "San José"
          },
          {
            "id": 1064,
            "nombre": "Santa Clara"
          }
        ]
      }
    ]
  },
  {
    "id": 17,
    "nombre": "Pichincha",
    "cantones": [
      {
        "id": 179,
        "nombre": "Cayambe",
        "parroquias": [
          {
            "id": 1142,
            "nombre": "Ascázubi"
          },
          {
            "id": 1138,
            "nombre": "Ayora"
          },
          {
            "id": 1143,
            "nombre": "Cangahua"
          },
          {
            "id": 1139,
            "nombre": "Cayambe"
          },
          {
            "id": 1141,
            "nombre": "Cayambe"
          },
          {
            "id": 1140,
            "nombre": "Juan Montalvo"
          },
          {
            "id": 1144,
            "nombre": "Olmedo (Pesillo)"
          },
          {
            "id": 1145,
            "nombre": "Otón"
          },
          {
            "id": 1146,
            "nombre": "Santa Rosa de Cuzubamba"
          }
        ]
      },
      {
        "id": 180,
        "nombre": "Mejia",
        "parroquias": [
          {
            "id": 1149,
            "nombre": "Aloasí"
          },
          {
            "id": 1148,
            "nombre": "Alóag"
          },
          {
            "id": 1150,
            "nombre": "Cutuglahua"
          },
          {
            "id": 1151,
            "nombre": "El Chaupi"
          },
          {
            "id": 1147,
            "nombre": "Machachi"
          },
          {
            "id": 1152,
            "nombre": "Manuel Cornejo Astorga (Tandapi)"
          },
          {
            "id": 1153,
            "nombre": "Tambillo"
          },
          {
            "id": 1154,
            "nombre": "Uyumbicho"
          }
        ]
      },
      {
        "id": 181,
        "nombre": "Pedro Moncayo",
        "parroquias": [
          {
            "id": 1156,
            "nombre": "La Esperanza"
          },
          {
            "id": 1157,
            "nombre": "Malchinguí"
          },
          {
            "id": 1155,
            "nombre": "Tabacundo"
          },
          {
            "id": 1158,
            "nombre": "Tocachi"
          },
          {
            "id": 1159,
            "nombre": "Tupigachi"
          }
        ]
      },
      {
        "id": 184,
        "nombre": "Pedro Vicente Maldonado",
        "parroquias": [
          {
            "id": 1170,
            "nombre": "Pedro Vicente Maldonado"
          }
        ]
      },
      {
        "id": 185,
        "nombre": "Puerto Quito",
        "parroquias": [
          {
            "id": 1171,
            "nombre": "Puerto Quito"
          }
        ]
      },
      {
        "id": 178,
        "nombre": "Quito",
        "parroquias": [
          {
            "id": 1101,
            "nombre": "Alangasí"
          },
          {
            "id": 1102,
            "nombre": "Amaguaña"
          },
          {
            "id": 1103,
            "nombre": "Atahualpa"
          },
          {
            "id": 1068,
            "nombre": "Belisario Quevedo"
          },
          {
            "id": 1104,
            "nombre": "Calacalí"
          },
          {
            "id": 1105,
            "nombre": "Calderón"
          },
          {
            "id": 1069,
            "nombre": "Carcelén"
          },
          {
            "id": 1070,
            "nombre": "Centro Histórico"
          },
          {
            "id": 1108,
            "nombre": "Chavezpamba"
          },
          {
            "id": 1109,
            "nombre": "Checa"
          },
          {
            "id": 1074,
            "nombre": "Chilibulo"
          },
          {
            "id": 1075,
            "nombre": "Chillogallo"
          },
          {
            "id": 1076,
            "nombre": "Chimbacalle"
          },
          {
            "id": 1071,
            "nombre": "Cochapamba"
          },
          {
            "id": 1072,
            "nombre": "Comité del Pueblo"
          },
          {
            "id": 1106,
            "nombre": "Conocoto"
          },
          {
            "id": 1073,
            "nombre": "Cotocollao"
          },
          {
            "id": 1107,
            "nombre": "Cumbayá"
          },
          {
            "id": 1077,
            "nombre": "El Condado"
          },
          {
            "id": 1110,
            "nombre": "El Quinche"
          },
          {
            "id": 1111,
            "nombre": "Gualea"
          },
          {
            "id": 1078,
            "nombre": "Guamaní"
          },
          {
            "id": 1112,
            "nombre": "Guangopolo"
          },
          {
            "id": 1113,
            "nombre": "Guayllabamba"
          },
          {
            "id": 1080,
            "nombre": "Itchimbía"
          },
          {
            "id": 1079,
            "nombre": "Iñaquito"
          },
          {
            "id": 1081,
            "nombre": "Jipijapa"
          },
          {
            "id": 1082,
            "nombre": "Kennedy"
          },
          {
            "id": 1083,
            "nombre": "La Argelia"
          },
          {
            "id": 1084,
            "nombre": "La Concepción"
          },
          {
            "id": 1085,
            "nombre": "La Ecuatoriana"
          },
          {
            "id": 1086,
            "nombre": "La Ferroviaria"
          },
          {
            "id": 1087,
            "nombre": "La Libertad"
          },
          {
            "id": 1088,
            "nombre": "La Magdalena"
          },
          {
            "id": 1089,
            "nombre": "La Mena"
          },
          {
            "id": 1114,
            "nombre": "La Merced"
          },
          {
            "id": 1115,
            "nombre": "Llano Chico"
          },
          {
            "id": 1116,
            "nombre": "Lloa"
          },
          {
            "id": 1090,
            "nombre": "Mariscal Sucre"
          },
          {
            "id": 1117,
            "nombre": "Mindo"
          },
          {
            "id": 1118,
            "nombre": "Nanegal"
          },
          {
            "id": 1119,
            "nombre": "Nanegalito"
          },
          {
            "id": 1120,
            "nombre": "Nayón"
          },
          {
            "id": 1121,
            "nombre": "Nono"
          },
          {
            "id": 1122,
            "nombre": "Pacto"
          },
          {
            "id": 1123,
            "nombre": "Pedro Vicente Maldonado"
          },
          {
            "id": 1124,
            "nombre": "Perucho"
          },
          {
            "id": 1125,
            "nombre": "Pifo"
          },
          {
            "id": 1127,
            "nombre": "Pomasqui"
          },
          {
            "id": 1091,
            "nombre": "Ponceano"
          },
          {
            "id": 1129,
            "nombre": "Puembo"
          },
          {
            "id": 1092,
            "nombre": "Puengasí"
          },
          {
            "id": 1137,
            "nombre": "Puerto Quito"
          },
          {
            "id": 1128,
            "nombre": "Puéllaro"
          },
          {
            "id": 1126,
            "nombre": "Píntag"
          },
          {
            "id": 1100,
            "nombre": "Quito Distrito Metropolitano"
          },
          {
            "id": 1093,
            "nombre": "Quitumbe"
          },
          {
            "id": 1094,
            "nombre": "Rumipamba"
          },
          {
            "id": 1130,
            "nombre": "San Antonio"
          },
          {
            "id": 1095,
            "nombre": "San Bartolo"
          },
          {
            "id": 1096,
            "nombre": "San Isidro del Inca"
          },
          {
            "id": 1131,
            "nombre": "San José de Minas"
          },
          {
            "id": 1097,
            "nombre": "San Juan"
          },
          {
            "id": 1132,
            "nombre": "San Miguel de Los Bancos"
          },
          {
            "id": 1098,
            "nombre": "Solanda"
          },
          {
            "id": 1133,
            "nombre": "Tababela"
          },
          {
            "id": 1134,
            "nombre": "Tumbaco"
          },
          {
            "id": 1099,
            "nombre": "Turubamba"
          },
          {
            "id": 1135,
            "nombre": "Yaruquí"
          },
          {
            "id": 1136,
            "nombre": "Zambiza"
          }
        ]
      },
      {
        "id": 182,
        "nombre": "Rumiñahui",
        "parroquias": [
          {
            "id": 1164,
            "nombre": "Cotogchoa"
          },
          {
            "id": 1165,
            "nombre": "Rumipamba"
          },
          {
            "id": 1161,
            "nombre": "San Pedro de Taboada"
          },
          {
            "id": 1162,
            "nombre": "San Rafael"
          },
          {
            "id": 1163,
            "nombre": "Sangolqui"
          },
          {
            "id": 1160,
            "nombre": "Sangolquí"
          }
        ]
      },
      {
        "id": 183,
        "nombre": "San Miguel de Los Bancos",
        "parroquias": [
          {
            "id": 1167,
            "nombre": "Mindo"
          },
          {
            "id": 1168,
            "nombre": "Pedro Vicente Maldonado"
          },
          {
            "id": 1169,
            "nombre": "Puerto Quito"
          },
          {
            "id": 1166,
            "nombre": "San Miguel de Los Bancos"
          }
        ]
      }
    ]
  },
  {
    "id": 24,
    "nombre": "Santa Elena",
    "cantones": [
      {
        "id": 220,
        "nombre": "La Libertad",
        "parroquias": [
          {
            "id": 1389,
            "nombre": "La Libertad"
          }
        ]
      },
      {
        "id": 221,
        "nombre": "Salinas",
        "parroquias": [
          {
            "id": 1395,
            "nombre": "Anconcito"
          },
          {
            "id": 1390,
            "nombre": "Carlos Espinoza Larrea"
          },
          {
            "id": 1391,
            "nombre": "Gral. Alberto Enríquez Gallo"
          },
          {
            "id": 1396,
            "nombre": "José Luis Tamayo (Muey)"
          },
          {
            "id": 1394,
            "nombre": "Salinas"
          },
          {
            "id": 1393,
            "nombre": "Santa Rosa"
          },
          {
            "id": 1392,
            "nombre": "Vicente Rocafuerte"
          }
        ]
      },
      {
        "id": 219,
        "nombre": "Santa Elena",
        "parroquias": [
          {
            "id": 1383,
            "nombre": "Atahualpa"
          },
          {
            "id": 1380,
            "nombre": "Ballenita"
          },
          {
            "id": 1385,
            "nombre": "Chanduy"
          },
          {
            "id": 1384,
            "nombre": "Colonche"
          },
          {
            "id": 1386,
            "nombre": "Manglaralto"
          },
          {
            "id": 1388,
            "nombre": "San José de Ancón"
          },
          {
            "id": 1381,
            "nombre": "Santa Elena"
          },
          {
            "id": 1382,
            "nombre": "Santa Elena"
          },
          {
            "id": 1387,
            "nombre": "Simón Bolívar (Julio Moreno)"
          }
        ]
      }
    ]
  },
  {
    "id": 23,
    "nombre": "Santo Domingo de Los Tsáchilas",
    "cantones": [
      {
        "id": 218,
        "nombre": "Santo Domingo",
        "parroquias": [
          {
            "id": 1365,
            "nombre": "Abraham Calazacón"
          },
          {
            "id": 1373,
            "nombre": "Alluriquín"
          },
          {
            "id": 1366,
            "nombre": "Bombolí"
          },
          {
            "id": 1367,
            "nombre": "Chiguilpe"
          },
          {
            "id": 1378,
            "nombre": "El Esfuerzo"
          },
          {
            "id": 1375,
            "nombre": "Luz de América"
          },
          {
            "id": 1374,
            "nombre": "Puerto Limón"
          },
          {
            "id": 1368,
            "nombre": "Río Toachi"
          },
          {
            "id": 1369,
            "nombre": "Río Verde"
          },
          {
            "id": 1376,
            "nombre": "San Jacinto del Búa"
          },
          {
            "id": 1379,
            "nombre": "Santa María del Toachi"
          },
          {
            "id": 1370,
            "nombre": "Santo Domingo de Los Colorados"
          },
          {
            "id": 1372,
            "nombre": "Santo Domingo de Los Colorados"
          },
          {
            "id": 1377,
            "nombre": "Valle Hermoso"
          },
          {
            "id": 1371,
            "nombre": "Zaracay"
          }
        ]
      }
    ]
  },
  {
    "id": 21,
    "nombre": "Sucumbíos",
    "cantones": [
      {
        "id": 212,
        "nombre": "Cascales",
        "parroquias": [
          {
            "id": 1325,
            "nombre": "El Dorado de Cascales"
          },
          {
            "id": 1326,
            "nombre": "Santa Rosa de Sucumbíos"
          },
          {
            "id": 1327,
            "nombre": "Sevilla"
          }
        ]
      },
      {
        "id": 213,
        "nombre": "Cuyabeno",
        "parroquias": [
          {
            "id": 1330,
            "nombre": "Aguas Negras"
          },
          {
            "id": 1329,
            "nombre": "Cuyabeno"
          },
          {
            "id": 1328,
            "nombre": "Tarapoa"
          }
        ]
      },
      {
        "id": 208,
        "nombre": "Gonzalo Pizarro",
        "parroquias": [
          {
            "id": 1303,
            "nombre": "El Dorado de Cascales"
          },
          {
            "id": 1304,
            "nombre": "El Reventador"
          },
          {
            "id": 1305,
            "nombre": "Gonzalo Pizarro"
          },
          {
            "id": 1306,
            "nombre": "Lumbaquí"
          },
          {
            "id": 1307,
            "nombre": "Puerto Libre"
          },
          {
            "id": 1308,
            "nombre": "Santa Rosa de Sucumbíos"
          }
        ]
      },
      {
        "id": 207,
        "nombre": "Lago Agrio",
        "parroquias": [
          {
            "id": 1302,
            "nombre": "Aguas Negras"
          },
          {
            "id": 1294,
            "nombre": "Cuyabeno"
          },
          {
            "id": 1295,
            "nombre": "Dureno"
          },
          {
            "id": 1298,
            "nombre": "El Eno"
          },
          {
            "id": 1296,
            "nombre": "General Farfán"
          },
          {
            "id": 1300,
            "nombre": "Jambelí"
          },
          {
            "id": 1293,
            "nombre": "Nueva Loja"
          },
          {
            "id": 1299,
            "nombre": "Pacayacu"
          },
          {
            "id": 1301,
            "nombre": "Santa Cecilia"
          },
          {
            "id": 1297,
            "nombre": "Tarapoa"
          }
        ]
      },
      {
        "id": 209,
        "nombre": "Putumayo",
        "parroquias": [
          {
            "id": 1310,
            "nombre": "Palma Roja"
          },
          {
            "id": 1311,
            "nombre": "Puerto Bolívar (Puerto Montúfar)"
          },
          {
            "id": 1309,
            "nombre": "Puerto El Carmen del Putumayo"
          },
          {
            "id": 1312,
            "nombre": "Puerto Rodríguez"
          },
          {
            "id": 1313,
            "nombre": "Santa Elena"
          }
        ]
      },
      {
        "id": 210,
        "nombre": "Shushufindi",
        "parroquias": [
          {
            "id": 1315,
            "nombre": "Limoncocha"
          },
          {
            "id": 1316,
            "nombre": "Pañacocha"
          },
          {
            "id": 1318,
            "nombre": "San Pedro de Los Cofanes"
          },
          {
            "id": 1317,
            "nombre": "San Roque (Cab. En San Vicente)"
          },
          {
            "id": 1314,
            "nombre": "Shushufindi"
          },
          {
            "id": 1319,
            "nombre": "Siete de Julio"
          }
        ]
      },
      {
        "id": 211,
        "nombre": "Sucumbíos",
        "parroquias": [
          {
            "id": 1321,
            "nombre": "El Playón de San Francisco"
          },
          {
            "id": 1320,
            "nombre": "La Bonita"
          },
          {
            "id": 1322,
            "nombre": "La Sofía"
          },
          {
            "id": 1323,
            "nombre": "Rosa Florida"
          },
          {
            "id": 1324,
            "nombre": "Santa Bárbara"
          }
        ]
      }
    ]
  },
  {
    "id": 18,
    "nombre": "Tungurahua",
    "cantones": [
      {
        "id": 186,
        "nombre": "Ambato",
        "parroquias": [
          {
            "id": 1182,
            "nombre": "Ambatillo"
          },
          {
            "id": 1181,
            "nombre": "Ambato"
          },
          {
            "id": 1183,
            "nombre": "Atahualpa (Chisalata)"
          },
          {
            "id": 1172,
            "nombre": "Atocha – Ficoa"
          },
          {
            "id": 1184,
            "nombre": "Augusto N. Martínez (Mundugleo)"
          },
          {
            "id": 1173,
            "nombre": "Celiano Monge"
          },
          {
            "id": 1185,
            "nombre": "Constantino Fernández (Cab. En Cullitahua)"
          },
          {
            "id": 1198,
            "nombre": "Cunchibamba"
          },
          {
            "id": 1174,
            "nombre": "Huachi Chico"
          },
          {
            "id": 1186,
            "nombre": "Huachi Grande"
          },
          {
            "id": 1175,
            "nombre": "Huachi Loreto"
          },
          {
            "id": 1187,
            "nombre": "Izamba"
          },
          {
            "id": 1188,
            "nombre": "Juan Benigno Vela"
          },
          {
            "id": 1176,
            "nombre": "La Merced"
          },
          {
            "id": 1177,
            "nombre": "La Península"
          },
          {
            "id": 1178,
            "nombre": "Matriz"
          },
          {
            "id": 1189,
            "nombre": "Montalvo"
          },
          {
            "id": 1190,
            "nombre": "Pasa"
          },
          {
            "id": 1191,
            "nombre": "Picaigua"
          },
          {
            "id": 1192,
            "nombre": "Pilagüín (Pilahüín)"
          },
          {
            "id": 1179,
            "nombre": "Pishilata"
          },
          {
            "id": 1193,
            "nombre": "Quisapincha (Quizapincha)"
          },
          {
            "id": 1194,
            "nombre": "San Bartolomé de Pinllog"
          },
          {
            "id": 1195,
            "nombre": "San Fernando (Pasa San Fernando)"
          },
          {
            "id": 1180,
            "nombre": "San Francisco"
          },
          {
            "id": 1196,
            "nombre": "Santa Rosa"
          },
          {
            "id": 1197,
            "nombre": "Totoras"
          },
          {
            "id": 1199,
            "nombre": "Unamuncho"
          }
        ]
      },
      {
        "id": 187,
        "nombre": "Baños de Agua Santa",
        "parroquias": [
          {
            "id": 1200,
            "nombre": "Baños de Agua Santa"
          },
          {
            "id": 1201,
            "nombre": "Lligua"
          },
          {
            "id": 1202,
            "nombre": "Río Negro"
          },
          {
            "id": 1203,
            "nombre": "Río Verde"
          },
          {
            "id": 1204,
            "nombre": "Ulba"
          }
        ]
      },
      {
        "id": 188,
        "nombre": "Cevallos",
        "parroquias": [
          {
            "id": 1205,
            "nombre": "Cevallos"
          }
        ]
      },
      {
        "id": 189,
        "nombre": "Mocha",
        "parroquias": [
          {
            "id": 1206,
            "nombre": "Mocha"
          },
          {
            "id": 1207,
            "nombre": "Pinguilí"
          }
        ]
      },
      {
        "id": 190,
        "nombre": "Patate",
        "parroquias": [
          {
            "id": 1209,
            "nombre": "El Triunfo"
          },
          {
            "id": 1210,
            "nombre": "Los Andes (Cab. En Poatug)"
          },
          {
            "id": 1208,
            "nombre": "Patate"
          },
          {
            "id": 1211,
            "nombre": "Sucre (Cab. En Sucre-Patate Urcu)"
          }
        ]
      },
      {
        "id": 191,
        "nombre": "Quero",
        "parroquias": [
          {
            "id": 1212,
            "nombre": "Quero"
          },
          {
            "id": 1213,
            "nombre": "Rumipamba"
          },
          {
            "id": 1214,
            "nombre": "Yanayacu - Mochapata (Cab. En Yanayacu)"
          }
        ]
      },
      {
        "id": 192,
        "nombre": "San Pedro de Pelileo",
        "parroquias": [
          {
            "id": 1218,
            "nombre": "Benítez (Pachanlica)"
          },
          {
            "id": 1219,
            "nombre": "Bolívar"
          },
          {
            "id": 1221,
            "nombre": "Chiquicha (Cab. En Chiquicha Grande)"
          },
          {
            "id": 1220,
            "nombre": "Cotaló"
          },
          {
            "id": 1222,
            "nombre": "El Rosario (Rumichaca)"
          },
          {
            "id": 1223,
            "nombre": "García Moreno (Chumaqui)"
          },
          {
            "id": 1224,
            "nombre": "Guambaló (Huambaló)"
          },
          {
            "id": 1215,
            "nombre": "Pelileo"
          },
          {
            "id": 1217,
            "nombre": "Pelileo"
          },
          {
            "id": 1216,
            "nombre": "Pelileo Grande"
          },
          {
            "id": 1225,
            "nombre": "Salasaca"
          }
        ]
      },
      {
        "id": 193,
        "nombre": "Santiago de Píllaro",
        "parroquias": [
          {
            "id": 1229,
            "nombre": "Baquerizo Moreno"
          },
          {
            "id": 1226,
            "nombre": "Ciudad Nueva"
          },
          {
            "id": 1230,
            "nombre": "Emilio María Terán (Rumipamba)"
          },
          {
            "id": 1231,
            "nombre": "Marcos Espinel (Chacata)"
          },
          {
            "id": 1232,
            "nombre": "Presidente Urbina (Chagrapamba -Patzucul)"
          },
          {
            "id": 1227,
            "nombre": "Píllaro"
          },
          {
            "id": 1228,
            "nombre": "Píllaro"
          },
          {
            "id": 1233,
            "nombre": "San Andrés"
          },
          {
            "id": 1234,
            "nombre": "San José de Poaló"
          },
          {
            "id": 1235,
            "nombre": "San Miguelito"
          }
        ]
      },
      {
        "id": 194,
        "nombre": "Tisaleo",
        "parroquias": [
          {
            "id": 1237,
            "nombre": "Quinchicoto"
          },
          {
            "id": 1236,
            "nombre": "Tisaleo"
          }
        ]
      }
    ]
  },
  {
    "id": 19,
    "nombre": "Zamora Chinchipe",
    "cantones": [
      {
        "id": 201,
        "nombre": "Centinela del Cóndor",
        "parroquias": [
          {
            "id": 1276,
            "nombre": "Panguintza"
          },
          {
            "id": 1274,
            "nombre": "Paquisha"
          },
          {
            "id": 1275,
            "nombre": "Triunfo-Dorado"
          },
          {
            "id": 1273,
            "nombre": "Zumbi"
          }
        ]
      },
      {
        "id": 196,
        "nombre": "Chinchipe",
        "parroquias": [
          {
            "id": 1250,
            "nombre": "Chito"
          },
          {
            "id": 1251,
            "nombre": "El Chorro"
          },
          {
            "id": 1252,
            "nombre": "El Porvenir del Carmen"
          },
          {
            "id": 1253,
            "nombre": "La Chonta"
          },
          {
            "id": 1254,
            "nombre": "Palanda"
          },
          {
            "id": 1255,
            "nombre": "Pucapamba"
          },
          {
            "id": 1258,
            "nombre": "San Andrés"
          },
          {
            "id": 1256,
            "nombre": "San Francisco del Vergel"
          },
          {
            "id": 1257,
            "nombre": "Valladolid"
          },
          {
            "id": 1249,
            "nombre": "Zumba"
          }
        ]
      },
      {
        "id": 200,
        "nombre": "El Pangui",
        "parroquias": [
          {
            "id": 1270,
            "nombre": "El Guisme"
          },
          {
            "id": 1269,
            "nombre": "El Pangui"
          },
          {
            "id": 1271,
            "nombre": "Pachicutza"
          },
          {
            "id": 1272,
            "nombre": "Tundayme"
          }
        ]
      },
      {
        "id": 197,
        "nombre": "Nangaritza",
        "parroquias": [
          {
            "id": 1259,
            "nombre": "Guayzimi"
          },
          {
            "id": 1261,
            "nombre": "Nuevo Paraíso"
          },
          {
            "id": 1260,
            "nombre": "Zurmi"
          }
        ]
      },
      {
        "id": 202,
        "nombre": "Palanda",
        "parroquias": [
          {
            "id": 1278,
            "nombre": "El Porvenir del Carmen"
          },
          {
            "id": 1281,
            "nombre": "La Canela"
          },
          {
            "id": 1277,
            "nombre": "Palanda"
          },
          {
            "id": 1279,
            "nombre": "San Francisco del Vergel"
          },
          {
            "id": 1280,
            "nombre": "Valladolid"
          }
        ]
      },
      {
        "id": 203,
        "nombre": "Paquisha",
        "parroquias": [
          {
            "id": 1283,
            "nombre": "Bellavista"
          },
          {
            "id": 1284,
            "nombre": "Nuevo Quito"
          },
          {
            "id": 1282,
            "nombre": "Paquisha"
          }
        ]
      },
      {
        "id": 198,
        "nombre": "Yacuambi",
        "parroquias": [
          {
            "id": 1262,
            "nombre": "28 de Mayo (San José de Yacuambi)"
          },
          {
            "id": 1263,
            "nombre": "La Paz"
          },
          {
            "id": 1264,
            "nombre": "Tutupali"
          }
        ]
      },
      {
        "id": 199,
        "nombre": "Yantzaza (Yanzatza)",
        "parroquias": [
          {
            "id": 1266,
            "nombre": "Chicaña"
          },
          {
            "id": 1267,
            "nombre": "El Pangui"
          },
          {
            "id": 1268,
            "nombre": "Los Encuentros"
          },
          {
            "id": 1265,
            "nombre": "Yantzaza (Yanzatza)"
          }
        ]
      },
      {
        "id": 195,
        "nombre": "Zamora",
        "parroquias": [
          {
            "id": 1241,
            "nombre": "Cumbaratza"
          },
          {
            "id": 1238,
            "nombre": "El Limón"
          },
          {
            "id": 1242,
            "nombre": "Guadalupe"
          },
          {
            "id": 1243,
            "nombre": "Imbana (La Victoria de Imbana)"
          },
          {
            "id": 1244,
            "nombre": "Paquisha"
          },
          {
            "id": 1245,
            "nombre": "Sabanilla"
          },
          {
            "id": 1248,
            "nombre": "San Carlos de Las Minas"
          },
          {
            "id": 1246,
            "nombre": "Timbara"
          },
          {
            "id": 1239,
            "nombre": "Zamora"
          },
          {
            "id": 1240,
            "nombre": "Zamora"
          },
          {
            "id": 1247,
            "nombre": "Zumbi"
          }
        ]
      }
    ]
  },
  {
    "id": 25,
    "nombre": "Zonas No Delimitadas",
    "cantones": [
      {
        "id": 224,
        "nombre": "El Piedrero",
        "parroquias": []
      },
      {
        "id": 222,
        "nombre": "Las Golondrinas",
        "parroquias": [
          {
            "id": 1399,
            "nombre": "El Piedrero"
          },
          {
            "id": 1397,
            "nombre": "Las Golondrinas"
          },
          {
            "id": 1398,
            "nombre": "Manga del Cura"
          }
        ]
      },
      {
        "id": 223,
        "nombre": "Manga del Cura",
        "parroquias": []
      }
    ]
  }
];

export function obtenerCantonesPorProvincia(idProvincia: number | null): ICantonEc[] {
  if (idProvincia === null) return [];
  const provincia = UBICACION_ECUADOR.find((p) => p.id === idProvincia);
  return provincia ? provincia.cantones : [];
}

export function obtenerParroquiasPorCanton(idProvincia: number | null, idCanton: number | null): IParroquiaEc[] {
  if (idCanton === null) return [];
  const cantones = obtenerCantonesPorProvincia(idProvincia);
  const canton = cantones.find((c) => c.id === idCanton);
  return canton ? canton.parroquias : [];
}
