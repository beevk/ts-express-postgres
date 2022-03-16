import { Service } from 'typedi';

@Service()
export default class SampleInjectedService {
    printMessage(): void {
        console.log('Ping from SampleInjectedService!');
    }
}
