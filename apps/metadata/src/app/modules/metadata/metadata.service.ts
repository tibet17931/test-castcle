import { Injectable } from '@nestjs/common';

@Injectable()
export class MetadataService {

    listHashtags() {
        return {
            message: "success message",
            payload: [
                {
                    id: "{_id}",
                    slug: "#castcle",
                    name: "Castcle",
                    key: "hashtag.castcle",
                    created: new Date(),
                    updated: new Date()
                }
            ]
        }
    }
}
