
export type Weather = {
    current: {
        temp_c: number;
        last_updated: string,
            feelslike_c:number,
            precip_mm: number,
            pressure_mb: number,
            wind_dir: string,
            wind_kph: number
           
        condition: {
            text: string,
            icon: string
        }

    },
    location: {
        name:string
    },
    forecast: {
        forecastday: [
            {date:string,
                day: {
                    maxtemp_c: number,
                    mintemp_c: number
                condition: {
                    text:string,
                    icon:string,
                   
                }
                },
            },
            {date:string,
                day: {
                    maxtemp_c: number,
                    mintemp_c: number
                condition: {
                    text:string,
                    icon:string,
                   
                }
                },
            },
            {date:string,
                day: {
                    maxtemp_c: number,
                    mintemp_c: number
                condition: {
                    text:string,
                    icon:string,
                    
                }
                },
            },
        ]
    }
}
