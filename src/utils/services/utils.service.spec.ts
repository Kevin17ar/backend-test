import { Test, TestingModule } from '@nestjs/testing';
import { UtilsService } from './utils.service';
import { DatePattern } from '../../common/enums/date-pattern.enum';

describe('UtilsService test', () => {
  let utilsService: UtilsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UtilsService],
    }).compile();

    utilsService = module.get<UtilsService>(UtilsService);
  });

  it('should be defined', () => {
    expect(utilsService).toBeDefined();
  });

  describe('formatDate', () => {
    it('should format a valid date with default pattern', () => {
      const date = new Date('2024-03-20');
      const result = utilsService.formatDate(date);

      expect(result).toBe('2024-03-19');
    });

    it('should format a date with specific pattern', () => {
      const date = new Date('2024-03-20');
      const result = utilsService.formatDate(date, DatePattern.DDMMYYYY);

      expect(result).toBe('19-03-2024');
    });

    it('should return null when date is null or undfined', () => {
      const resultNull = utilsService.formatDate(null);
      const resultUndefined = utilsService.formatDate(undefined);

      expect(resultNull).toBeNull();
      expect(resultUndefined).toBeNull();
    });

    it('should return null when date value is -62135582772000', () => {
      const invalidDate = new Date(-62135582772000);
      const result = utilsService.formatDate(invalidDate);

      expect(result).toBeNull();
    });

    it('should return null when date timestamp is 0', () => {
      const zeroDate = new Date(0);
      const result = utilsService.formatDate(zeroDate);

      expect(result).toBeNull();
    });
  });
});
