import { request, response } from "express";
import { getCustomRepository } from "typeorm"
import { SettingsRepository } from "../repositories/SettingsRepoitory"

class SettingsController {
    async create(request: Request, response: Response) {
        const { chat, username } = request.body;
        const SettingsRepoitory = getCustomRepository(SettingsRepository)

        SettingsRepository.create({
            chat,
            username
        });
        await SettingsRepository.save(settings);

        return response.json(settings);
    }
}

export { SettingsController }