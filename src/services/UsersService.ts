import { getCustomRepository, Repository } from "typeorm"
import { SettingsRepository } from "../repositories/SettingsRepository"
import { UsersRepository } from "../repositories/UsersRepository"


class UsersService {
    SettingsRepository: any
    
    async findByEmail(email: string) {
        const bugfix = await this.SettingsRepository.findOne({ email })
        return bugfix
    }

    private usersRepository: UsersRepository
    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository)
    }

    async create(email: string) {
        const usersExists = await this.usersRepository.findOne({ email })
        if (usersExists) return usersExists

        const user = this.usersRepository.create({ email })
        await this.usersRepository.save(user)
        return user
    }

}

export { UsersService }