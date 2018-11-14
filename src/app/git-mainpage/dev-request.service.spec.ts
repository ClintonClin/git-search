import { TestBed, inject } from '@angular/core/testing';

import { DevRequestService } from './dev-request.service';

describe('DevRequestService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [DevRequestService]
        });
    });

    it('should be created', inject([DevRequestService], (service: DevRequestService) => {
        expect(service).toBeTruthy();
    }));
});