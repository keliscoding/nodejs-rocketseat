import { container } from 'tsyringe';

import { IDateProvider  } from "./DateProvider/IDateProvider";
import { DayjsDateProvider } from '@shared/container/providers/DateProvider/implementations/DayjsDateProvider';

container.registerSingleton<IDateProvider>(
    "DateProvider",
    DayjsDateProvider
)